import classes from './EditEventForm.module.css';
import Button from '../ui/Button';

const EditEventForm = (props) => {
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
      </div>
    </form>
  );
};

export default EditEventForm
