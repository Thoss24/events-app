import { json, redirect } from "react-router-dom";

export const action = async ({request, params}) => { // using the action method to retrieve data from the NewEventForm

    const method = request.method;
    
    const data = await request.formData();

    console.log(data.get('name'))

    let url = 'https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events.json';

    if (method === 'PATCH') {
        const id = params.eventId
        url = `https://react-http-6cb96-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`;
    }

    const newFormData = {
        name: data.get('name'), // data identifier is the 'name' property on the input field
        date: data.get('date')
    };

    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(newFormData)
    });

    if (!response.ok) {
        return json({message: 'Could not submit new event request'}, {status: 500})
    } 

    return redirect('/events')
};