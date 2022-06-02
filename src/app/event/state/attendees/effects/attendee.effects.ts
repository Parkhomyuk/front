import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import {switchMap, map, catchError, filter} from 'rxjs/operators'
import { EventService } from "src/app/event/services/event.service";
import { Attendee } from "src/app/models";
import { AddAttendee, LoadAttendeesFail, LoadAttendeesSuccess } from "../actions/attendees.actions";
import { AttendeeTypesActions } from "../actions/attendeeTypes.actions";
import {ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';

import * as AttendeeActions from 'src/app/event/state/attendees/actions/attendees.actions';
 

@Injectable()
export class AttendeeEffects{
    constructor(private actions$: Actions, private eventService: EventService){}

    getAttendees$= createEffect(()=>this.actions$.pipe(
        ofType(AttendeeTypesActions.LoadAttendees),
        switchMap(()=>{
             return this.eventService.getAttendees().pipe(
                   map((attendees: Attendee[])=> LoadAttendeesSuccess({attendees}),
                   catchError((error)=>of(LoadAttendeesFail(error)) ) 
             )
        )})
    ))
    addAttendee$=createEffect(()=>this.actions$.pipe(
        ofType(AddAttendee),
        switchMap((action)=>{
            return this.eventService.addAttendee(action.attendee).pipe(
                map((attendee: Attendee)=> AttendeeActions.AddAttendeeSuccess({attendee})),
                catchError(error=>of(LoadAttendeesFail(error)))
            )
        })
    ))
    loadDiearyHealthActons$=createEffect(()=> this.actions$.pipe(
        ofType(ROUTER_NAVIGATION),
        map((r: RouterNavigationAction)=>({
            url: r.payload.routerState.url,
            filterBy: r.payload.routerState.root.queryParams['filterBy']
        })),
        filter(({ url, filterBy }) => url.startsWith('/event')),
        map(({ filterBy }) => AttendeeActions.FilterBy(filterBy))
    ))
}