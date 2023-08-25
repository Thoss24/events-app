import { NavLink } from "react-router-dom";

const EventsNavigation = () => {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={""}>Events</NavLink>
          </li>
          <li>
            <NavLink to={"new_event"}>New Events</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default EventsNavigation;
