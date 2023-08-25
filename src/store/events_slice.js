import { createSlice } from "@reduxjs/toolkit";

const eventsState = {
    bookedEvents: [],
    bookedEventsQuantity: 0
};

const eventsSlice = createSlice({
    name: 'events',
    initialState: eventsState,
    reducers: {
        addEvents() {

        },
        removeEvent() {

        }
    }
});

export const eventsActions = eventsSlice.actions
export default eventsSlice.reducer