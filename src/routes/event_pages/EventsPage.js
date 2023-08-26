// import useHttp from "../../hooks/use-http";
import EventList from "../../components/elements/EventList";
// import { useEffect } from "react";
import { useState } from "react";
import classes from "./EventsPage.module.css";
import { json, useLoaderData } from "react-router-dom";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  // const { sendRequest } = useHttp();

  // useEffect(() => {
  //   sendRequest(applyFetchedData);
  // }, [sendRequest]);

  // const applyFetchedData = (data) => {
  //   const eventsArray = [];

  //   for (const item in data) {
  //     eventsArray.push({
  //       name: data[item].name,
  //       date: data[item].date,
  //       id: data[item].id,
  //     });
  //   }

  //   setEvents(eventsArray);
  //   console.log(eventsArray);
  // };

  const data = useLoaderData();

  const eventsArray = [];

  for (const item in data) {
      eventsArray.push({
        name: data[item].name,
        date: data[item].date,
        id: data[item].id,
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
    return json({message: 'Could not retrieve events'}, {status: 500})
  } else {
    return response
  }
}
