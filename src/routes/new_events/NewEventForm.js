import classes from './NewEventForm.module.css';
import { Form, useNavigation } from "react-router-dom";

const NewEventForm = () => {

  const navigate = useNavigation();

  const isSubmitting = navigate.state === 'submitting';

  const text = isSubmitting ? 'Submitting...' : 'Add'

  if (isSubmitting) {
    console.log(text)
  }

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
        <button type='submit' disabled={isSubmitting}>{text}</button> 
        </div>
      </Form>
  );
};

export default NewEventForm;;
