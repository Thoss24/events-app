import classes from './EventItem.module.css';
import { Link } from 'react-router-dom';

const EventItem = (props) => {

    return (
        <div className={classes['event-item']}>
            <Link to={props.id}>
            <h1>{props.name}</h1>
            <h2>{props.date}</h2>
            </Link>
        </div>
    )
};

export default EventItem