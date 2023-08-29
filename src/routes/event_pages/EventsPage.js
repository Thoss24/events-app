import EventList from "../../components/elements/EventList";
import classes from "./EventsPage.module.css";
import { json, useLoaderData } from "react-router-dom";

const EventsPage = () => {

  const data = useLoaderData();

  const eventsArray = [];

  for (const item in data) {
      eventsArray.push({
        name: data[item].name,
        date: data[item].date,
        id: item,
      });
  }

  return (
    <div className={classes['events-page']}>
      <h1>Events page</h1>
      <EventList events={eventsArray} />
    </div>
  );
};

export default EventsPage;

export const loader = async () => {
  
  const response = await fetch('https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events.json')

  if (!response.ok) {
    return json({message: 'Could not load events!'}, {status: 500})
  } else {
    return response
  }
};

