import useHttp from "../../hooks/use-http";
import { useEffect } from "react";
import { useState } from "react";

const EventsPage = () => {

    const [events, setEvents] = useState([])

    const { sendRequest } = useHttp()

    
    useEffect(() => {
        sendRequest(applyFetchedData)
    }, [sendRequest])
    
    const applyFetchedData = (data) => {

        const eventsArray = [];

        for (const item in data) {
            eventsArray.push({
                name: data[item]
            });
        };

        setEvents(eventsArray)
    };

    return (
        <div>
            <h1>Events page</h1>
            <ul>
                {events.map(event => (
                    <li key={event}>{event.name}</li>
                ))}
            </ul>
        </div>
    )
};

export default EventsPage