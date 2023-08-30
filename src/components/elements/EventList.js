import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = (props) => {
  const checkList = () => {
    const events = props.events
      .map((event) => event)
      .reduce((a, b) => {
        return a.name;
      });
    const finalArr = [];

    for (const i in events) {
      finalArr.push({
        name: events[i].name,
        date: events[i].date,
        id: i,
      });
    }

    return finalArr;
  };

  return (
    <div className={classes["events-list"]}>
      {checkList().map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          name={event.name}
          date={event.date}
        />
      ))}
    </div>
  );
};

export default EventList;
