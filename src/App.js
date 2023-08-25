import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppRoot from './routes/AppRoot';
import Error from './components/error/Error';
import Home from './components/home/Home';
import EventsPage from './components/event_pages/EventsPage'
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
          element: <Home />
        },
        {
          path: 'events',
          element: <EventsPage />
        },
      ]    
    }
  ])

  return <RouterProvider router={route}></RouterProvider>
}

export default App;
