import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";


const MainNavigation = () => {
  const isActive = ({isActive}) => {
    return isActive ? classes.active : undefined;
  };

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
    </div>
  );
};

export default MainNavigation;
