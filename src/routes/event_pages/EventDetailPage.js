import Button from "../../components/ui/Button";
import classes from "./EventDetailPage.module.css";
import {
  json,
  redirect,
  useRouteLoaderData,
  useSubmit,
  defer,
  Await,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { eventsActions } from "../../store/events_slice";
import loadEvents from "../../components/utility/load-events";
import { Suspense } from "react";
import EventList from "../../components/elements/EventList";
import { useParams } from "react-router-dom";


const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  console.log(event)

  const dispatch = useDispatch();

  const addEvent = () => {
    dispatch(eventsActions.addEvents());
  };

  const submit = useSubmit();

  const deleteEventHandler = () => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" }); // submit takes the form data as the first argument and the second argument allows us to set the same values as on a form
    }
  };

  return (
    <div>
      <Suspense>
        <Await resolve={event}>
          {(event) => (
            <div className={classes["event-details-container"]}>
              <h1>{event.name}</h1>
              <h2>{event.date}</h2>
              <div className={classes["buttons-container"]}>
                <Button text={"Back"} link={".."} />
                <Button text={"Edit"} link={"edit"} />
                <Button text={"Add"} clicked={addEvent} />
                <Button text={"Delete"} clicked={deleteEventHandler} />
              </div>
            </div>
          )}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={events}>
          {(events) => <EventList events={[events]}/>}
        </Await>
      </Suspense>
    </div>
    // <div className={classes["event-details-container"]}>
    //   <h1>{data.name}</h1>
    //   <h2>{data.date}</h2>
    //   <div className={classes["buttons-container"]}>
    //     <Button text={"Back"} link={".."}/>
    //     <Button text={"Edit"} link={"edit"}/>
    //     <Button text={'Add'} clicked={addEvent}/>
    //     <Button text={'Delete'} clicked={deleteEventHandler}/>
    //   </div>
    // </div>
  );
};

export default EventDetailPage;

const loadEvent = async (id) => {

  const response = await fetch(
    `https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`
  );

  if (!response.ok) {
    throw json({ message: "Could not load events!" }, { status: 500 });
  } else {
    const resultData = await response.json();
    return resultData;
  }
};

export const loader = async ({params, request}) => {

  const id = params.eventId

  return defer({
    events: loadEvents(),
    event: loadEvent(id),
  });
};

export const action = async ({ request, params }) => {
  const id = params.eventId;

  console.log(params);

  const response = await fetch(
    `https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`,
    {
      method: request.method,
    }
  );

  console.log(response);

  if (!response.ok) {
    throw json({ message: "Could not load event details!" }, { status: 500 });
  }
  return redirect("/events");
};
