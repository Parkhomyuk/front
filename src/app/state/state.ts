import * as fromSpinner from './spinner/models/spinner.interface'
import * as fromEvent from 'src/app/event/state/attendees/models/attendee.stateInterface'
 
export interface StateApp{
    spinner: fromSpinner.ISpinnerState;
    events: fromEvent.IAttendeeState

}