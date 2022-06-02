import { createAction, props } from "@ngrx/store";
import { Attendee } from "src/app/models";
import { AttendeeTypesActions } from "./attendeeTypes.actions";

export const LoadAttendees= createAction(
    AttendeeTypesActions.LoadAttendees
)
export const LoadAttendeesSuccess= createAction(
    AttendeeTypesActions.LoadAttendeesSuccess,
    props<{attendees: Attendee[]}>()
)
export const LoadAttendeesFail = createAction(
    AttendeeTypesActions.LoadAttendeesFail,
    props<{error: any}>()
)

export const AddAttendee= createAction(
    AttendeeTypesActions.AddAttendee,
    props<{attendee: Attendee}>()
)
export const AddAttendeeSuccess= createAction(
    AttendeeTypesActions.AddAttendeeSuccess,
    props<{attendee: Attendee}>()
)
export const AddAttendeeFail= createAction(
    AttendeeTypesActions.AddAttendeeFail,
    props<{error: any}>()
)

export const FilterBy = createAction(
    AttendeeTypesActions.FilterBy,
    props<{filter: string}>()
) 