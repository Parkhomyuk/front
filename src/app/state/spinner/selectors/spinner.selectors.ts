import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ISpinnerState } from "../models/spinner.interface";

export const getSpinnerState= createFeatureSelector<ISpinnerState>('spinner')
export const getSpinner= createSelector(
    getSpinnerState,
    (state: ISpinnerState)=>state.isOn
)