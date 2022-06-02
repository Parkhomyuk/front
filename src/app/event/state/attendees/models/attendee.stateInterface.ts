import {EntityState} from '@ngrx/entity';
import { Attendee } from "src/app/models";

export interface IAttendeeState extends EntityState<Attendee>{
   // attendees: Attendee[],
    loading: boolean,
    error: any,
    filterBy: string;
}