import EventsNavigation from "../../components/navigation/EventsNavigation";
import { Outlet } from "react-router-dom";
import classes from './EventsRoot.module.css';

const EventsRoot = () => {
    return (
      <div className={classes['events-root-nav']}>
        <EventsNavigation />
        <main>
            <Outlet />
        </main>
      </div>
    )
};

export default EventsRoot