import { Car } from "../model/Car";

export enum CarSelectionActionType {
    SET_MAKES_LIST = "SET_MAKES_LIST",
    SET_SELECTED_MAKE = "SET_SELECTED_MAKE",
    SET_MODELS_LIST = "SET_MODELS_LIST",
    SET_SELECTED_MODEL = "SET_SELECTED_MODEL",
    SET_CARS_LIST = "SET_CARS_LIST"
}

export type CarSelectionActions = 
    { type: CarSelectionActionType.SET_MAKES_LIST; makesList: string[] } |
    { type: CarSelectionActionType.SET_SELECTED_MAKE; selectedMake: string } |
    { type: CarSelectionActionType.SET_MODELS_LIST; modelsList: string[] } |
    { type: CarSelectionActionType.SET_SELECTED_MODEL; selectedModel: string } |
    { type: CarSelectionActionType.SET_CARS_LIST; carsList: Car[] };

export interface SetMakesList {
    (makesList: string[]): void;
}

export interface SetSelectedMake {
    (selectedMake: string): void;
}

export interface SetModelsList {
    (modelsList: string[]): void;
}

export interface SetSelectedModel {
    (selectedModel: string): void;
}

export interface SetCarsList {
    (carsList: Car[]): void;
}
