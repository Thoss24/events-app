import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppRoot from './routes/app/AppRoot';
import Error from './components/error/Error';
import Home from './routes/home/Home';
import EventsPage from './routes/event_pages/EventsPage';
import EventsRoot from './routes/event_pages/EventsRoot';
import NewEventPage from './routes/event_pages/NewEventPage';
import EventDetailPage from './routes/event_pages/EventDetailPage';
import EditEventPage from './routes/event_pages/EditEventPage';
import './App.css';

function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <AppRoot />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'events',
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
            },
            {
              path: 'eventId',
              element: <EventDetailPage />,
              children: [
                {
                  path: 'eventId/edit_event',
                  element: <EditEventPage />
                }
              ]
            },
            {
              path: 'new_event',
              element: <NewEventPage />
            }
          ]
        },
      ]    
    }
  ])

  return <RouterProvider router={route}></RouterProvider>
}

export default App;
