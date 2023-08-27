import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const MainNavigation = () => {
  const isActive = ({isActive}) => {
    return isActive ? classes.active : undefined;
  };

  const numberOfBookedEvents = useSelector(state => state.events.bookedEventsQuantity)

  return (
    <div className={classes['main-nav']}>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className={isActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"events"} className={isActive}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
      <p>Booked Events: <strong>{numberOfBookedEvents}</strong></p>
    </div>
  );
};

export default MainNavigation;
