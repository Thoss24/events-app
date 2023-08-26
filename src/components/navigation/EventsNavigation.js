import { NavLink } from "react-router-dom";
import classes from './EventsNavigation.module.css'

const EventsNavigation = () => {

  return (
    <div className={classes['events-nav']}>
      <nav>
        <ul>
          <li>
            <NavLink to={""}>Events</NavLink>
          </li>
          <li>
            <NavLink to={"new-event"}>New Events</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default EventsNavigation;
