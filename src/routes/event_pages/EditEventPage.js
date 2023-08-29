import { useRouteLoaderData } from "react-router-dom";
import EditEventForm from "../../components/elements/EditEventForm";

const EditEventPage = () => {

    const data = useRouteLoaderData('event-detail');

    const name = data.name

    const date = data.date

    return (
        <EditEventForm name={name} date={date}/>
    )
};

export default EditEventPage