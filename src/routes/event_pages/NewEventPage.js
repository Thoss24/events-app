import NewEventForm from "../new_events/NewEventForm";
import { json, redirect } from "react-router-dom";

const NewEventPage = () => {
    return (
        <NewEventForm />
    )
};

export default NewEventPage

export const action = async ({request, params}) => { // using the action method to retrieve data from the NewEventForm

    const data = await request.formData();

    const newFormData = {
        name: data.get('name'), // data identifier is the 'name' property on the input field
        date: data.get('date')
    };

    const response = await fetch('https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events.json', {
        method: 'POST',
        body: JSON.stringify(newFormData)
    });

    if (!response.ok) {
        return json({message: 'Could not submit new event request'}, {status: 500})
    } 

    return redirect('/events')
};