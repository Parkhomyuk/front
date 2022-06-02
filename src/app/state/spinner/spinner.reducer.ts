import {  Action, createReducer, on } from "@ngrx/store";

import { startSpinnerAction, stopSpinnerAction } from "./actions/spinner.actions";
import { ISpinnerState } from "./models/spinner.interface";
export const initionalState: ISpinnerState={isOn: false}



export const _reducer = createReducer(
    initionalState,
    on(startSpinnerAction, (state)=>({
        ... state,
        isOn: true
    }) ),
    on(stopSpinnerAction, (state)=>({
        ... state,
        isOn: false
    }))
)

export function reducer(state: ISpinnerState | undefined, action: Action){
    return _reducer(state, action)
}