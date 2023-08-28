import Button from "../../components/ui/Button";
import classes from "./EventDetailPage.module.css";
import { json, redirect, useRouteLoaderData, useSubmit } from "react-router-dom";
import { useDispatch } from "react-redux";
import { eventsActions } from "../../store/events_slice";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  const dispatch = useDispatch();

  const addEvent = () => {
    dispatch(eventsActions.addEvents())
  };

  const submit = useSubmit();

  const deleteEventHandler = () => {
      const proceed = window.confirm("Are you sure?")

      if (proceed) {
        submit(null, { method: 'delete' }) // submit takes the form data as the first argument and the second argument allows us to set the same values as on a form
      }
  };

  return (
    <div className={classes["event-details-container"]}>
      <h1>{data.name}</h1>
      <h2>{data.date}</h2>
      <div className={classes["buttons-container"]}>
        <Button text={"Back"} link={".."}/>
        <Button text={"Edit"} link={"edit"}/>
        <Button text={'Add'} clicked={addEvent}/>
        <Button text={'Delete'} clicked={deleteEventHandler}/>
      </div>
    </div>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  console.log(params);

  const response = await fetch(
    `https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`
  );

  if (!response.ok) {
    return json({ message: "Could not load event details!" }, { status: 500 });
  } else {
    return response;
  }
};

export const action = async ({ request, params }) => {
  const id = params.eventId;

  console.log(params)

  const response = await fetch(
    `https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`, {
      method: request.method,

  });

  console.log(response)

  if (!response.ok) {
    throw json({ message: "Could not load event details!" }, { status: 500 });
  } 
  return redirect('/events')
};
