import * as fromRoot from 'src/app/state/state';
import * as fromAttendees from 'src/app/event/state/attendees/attendees.reducer';
import { IAttendeeState } from './attendees/models/attendee.stateInterface';
import { ActionReducerMap } from '@ngrx/store';
import { AttendeeEffects } from './attendees/effects/attendee.effects';

export interface EventState{
    attendees: IAttendeeState
}
export interface State extends fromRoot.StateApp{
    event: EventState
}

export const reducers: ActionReducerMap<EventState>={
    attendees: fromAttendees.reducer
}
export const effectsEvent: any[]=[AttendeeEffects]