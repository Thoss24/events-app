import EventList from "../../components/elements/EventList";
import classes from "./EventsPage.module.css";
import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import loadEvents from "../../components/utility/load-events";

const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <Suspense>
      <Await resolve={events}>
        {(events) => <EventList events={[events]}/>}
      </Await>
    </Suspense>
  );
};

loadEvents()

export default EventsPage;

export const loader = async () => {
  return defer({
    events: loadEvents(),
  });
};
