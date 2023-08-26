import EventItem from "./EventItem"
import classes from './EventList.module.css';

const EventList = (props) => {

    return (
        <div className={classes["events-list"]}>
        {props.events.map((event) => (
          <EventItem
          key={event.id}
          id={event.id}
          name={event.name}
          date={event.date}
          />
        ))}
      </div>
    )
}

export default EventList