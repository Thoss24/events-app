import eventsReducer from './events_slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        events: eventsReducer
    }
});

export default store
