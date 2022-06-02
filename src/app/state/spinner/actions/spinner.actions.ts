import { createAction } from "@ngrx/store";
import { SpinnerActionTypes } from "./spinner.actionsType";

export const startSpinnerAction=createAction(
    SpinnerActionTypes.startSpinnerType,    
)
export const stopSpinnerAction= createAction(
    SpinnerActionTypes.stopSpinnerType
)