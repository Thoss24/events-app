import classes from './EditEventForm.module.css';
import Button from '../ui/Button';
import { useSubmit } from 'react-router-dom';

const EditEventForm = (props) => {

  const submit = useSubmit();

  const deleteEventHandler = () => {
      const proceed = window.confirm("Are you sure?")

      if (proceed) {
        submit(null, { method: 'delete' }) // submit takes the form data as the first argument and the second argument allows us to set the same values as on a form
      }
  }

  return (
    <form action="" className={classes.form}>
      <h1>Edit Event</h1>
      <div className={classes.content}>
        <label htmlFor="name">Event Name</label>
        <input type="text" defaultValue={props.name}/>
      </div>
      <div className={classes.content}>
        <label htmlFor="date">Event Date</label>
        <input type="date" dat defaultValue={props.date}/>
      </div>
      <div>
        <Button link={'..'} text={'Cancel'}/>
        <Button clicked={deleteEventHandler} text={'Delete'}/>
      </div>
    </form>
  );
};

export default EditEventForm
