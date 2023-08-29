import classes from './EditEventForm.module.css';
import Button from '../ui/Button';
import { Form } from 'react-router-dom';

const EditEventForm = (props) => {

  return (
    <Form method="patch" className={classes.form}>
      <h1>Edit Event</h1>
      <div className={classes.content}>
        <label htmlFor="name">Event Name</label>
        <input type="text" name="name" defaultValue={props.name}/>
      </div>
      <div className={classes.content}>
        <label htmlFor="date">Event Date</label>
        <input type="date" name="date" dat defaultValue={props.date}/>
      </div>
      <div>
        <Button link={'..'} text={'Cancel'}/>
        <button type='submit'>Done</button>
      </div>
    </Form>
  );
};

export default EditEventForm
