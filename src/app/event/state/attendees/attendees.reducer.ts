import { createReducer, Action, on } from "@ngrx/store";
import { Attendee } from "src/app/models";
import { AddAttendeeFail, AddAttendeeSuccess, FilterBy, LoadAttendees, LoadAttendeesFail, LoadAttendeesSuccess } from "./actions/attendees.actions";

import {EntityAdapter, createEntityAdapter} from '@ngrx/entity'
 
 
import { IAttendeeState } from "./models/attendee.stateInterface";

 


export const adapter: EntityAdapter<Attendee>= createEntityAdapter<Attendee>()

export const initialState: IAttendeeState=adapter.getInitialState({
    attendees: [],
    loading: false,
    error: null,
    filterBy: 'all'
})

export const _reducer= createReducer(
    initialState,
    // on(LoadAttendees, (state)=>({
    //     ...state,
    //     loading: true,
    //     error: null
    // })),
    // on(LoadAttendeesSuccess, (state, action)=>({
    //     ...state,
    //     loading: false,
    //     attendees: action.attendees,
    //     error: null
    // })),
    // on(LoadAttendeesFail, (state, action)=>({
    //     ...state,
    //     loading: false,
    //     attendees: [],
    //     error: action.error
    // }))
    
    on(LoadAttendees, (state)=>{
        return adapter.removeAll({
            ...state,
            loading: true,
            error: null
        })
    }),
    on(LoadAttendeesSuccess, (state,action)=>{
        return adapter.addMany(action.attendees,{
            ...state,
            loading: false,
            error: null
        })
    }),
    on(LoadAttendeesFail, (state, action)=>{
        return adapter.removeAll({
            ...state,
            loading: false,
            error: action.error
        })
    }),
    on(AddAttendeeSuccess, (state, {attendee})=>{
        return adapter.addOne(attendee,{
            ...state,
            loading: false,
            error: null
        })
    }),
    // on(AddAttendeeSuccess, (state, action)=>{
    //     return adapter.addOne(action.attendee,state)
    // }),
    on(AddAttendeeFail, (state, action)=>({
      ...state,
      loading: false,
      error: action.error  
    })),
    on(FilterBy, (state, action)=>{
    return {
        ...state,
        filterBy: action.filter
    }})
)

export function reducer(state: IAttendeeState| undefined, action: Action){
    return _reducer(state, action)
}
export const{
    selectIds,
  selectEntities,
  selectAll,
  selectTotal
}=adapter.getSelectors();