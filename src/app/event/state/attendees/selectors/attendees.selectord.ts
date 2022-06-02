import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StateApp } from "src/app/state/state";
import { EventState } from "../..";
import { IAttendeeState } from "../models/attendee.stateInterface";
import * as fromAttendde from 'src/app/event/state/attendees/attendees.reducer';
import { FilterBy } from "../actions/attendees.actions";

export const getEventState= createFeatureSelector<EventState>('event')
export const getAttendeesState= createSelector(
    getEventState,
    state=>state.attendees
)
export const getAttendees= createSelector(
    getAttendeesState,
   // (state)=>state.attendees
   fromAttendde.selectAll
)
export const getFilterBy= createSelector(
    getAttendeesState,
    state=>state.filterBy
)
export const getFilterAttendees = createSelector(
    getAttendees,
    getFilterBy,
    (attendees, filterBy)=> attendees.filter(
            attendee=>filterBy === 'all' ? true : filterBy === 'withGuests' ? attendee.guests>=1 : attendee.guests ===0
        )

)

