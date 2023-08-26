import Button from "../../components/ui/Button";
import classes from './EventDetailPage.module.css';
import { json, useRouteLoaderData } from "react-router-dom";

const EventDetailPage = () => {

    const data = useRouteLoaderData('event-detail');

    console.log(data)

    return (
        <div className={classes['event-details-container']}>
            <h1>{data.name}</h1>
            <h2>{data.date}</h2>
            <div className={classes['buttons-container']}>
            <Button text={'Back'} link={'..'}></Button>
            <Button text={'Edit'} ></Button>
            </div>
        </div>
    )
};

export default EventDetailPage

export const loader = async ({request, params}) => {

    const id = params.eventId

    console.log(id)

    const response = await fetch(`https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`)

    if (!response.ok) {
        return json({message: 'Could not load event details'}, {status: 500})
    } else {
        return response
    }
};