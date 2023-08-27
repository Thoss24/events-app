import { createSlice, current } from "@reduxjs/toolkit";

const eventsState = {
    bookedEvents: [],
    bookedEventsQuantity: 0
};

const eventsSlice = createSlice({
    name: 'events',
    initialState: eventsState,
    reducers: {
        addEvents(state) {
            state.bookedEventsQuantity++
            console.log(current(state))
        },
        removeEvent() {

        }
    }
});

export const eventsActions = eventsSlice.actions
export default eventsSlice.reducer