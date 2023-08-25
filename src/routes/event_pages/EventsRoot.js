import EventsNavigation from "../../components/navigation/EventsNavigation";
import { Outlet } from "react-router-dom";

const EventsRoot = () => {
    return (
      <div>
        <EventsNavigation />
        <main>
            <Outlet />
        </main>
      </div>
    )
};

export default EventsRoot