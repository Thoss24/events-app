import classes from './NewEventForm.module.css';
import { Form } from "react-router-dom";

const NewEventForm = () => {

  return (
      <Form method="POST" className={classes.form}> 
        <h1>Add Event</h1>
        <div className={classes.content}>
          <label htmlFor="name">Event Name</label>
          <input name="name" type="text"/>
        </div>
        <div className={classes.content}>
          <label htmlFor="date">Event Date</label>
          <input name="date" type="date"/>
        </div>
        <div className={classes.buttons}>
        <button type='submit'>Add</button> 
        </div>
      </Form>
  );
};

export default NewEventForm;;
