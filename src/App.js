import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppRoot from "./routes/app/AppRoot";
import Error from "./routes/error/Error";
import Home from "./routes/home/Home";
import EventsPage, { loader as eventsPageLoader, } from "./routes/event_pages/EventsPage";
import EventsRoot from "./routes/event_pages/EventsRoot";
import NewEventPage, {action as newEventAction} from "./routes/event_pages/NewEventPage";
import EditEventPage from "./routes/event_pages/EditEventPage";
import EventDetailPage, {loader as eventDetailLoader, action as deleteEventAction } from './routes/event_pages/EventDetailPage';
import "./App.css";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <AppRoot />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsPageLoader,
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEventAction,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: deleteEventAction,
                },
              ],
            },
            {
              path: "new-event",
              element: <NewEventPage />,
              action: newEventAction
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
