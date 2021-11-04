import { CarSelectionState } from "../model/CarSelectionState";
import { CarSelectionActions, CarSelectionActionType } from "./Actions";

interface CarSelectionReducer {
    (state: CarSelectionState, action: CarSelectionActions): CarSelectionState;
}

function exhaustiveCheck(action: never): never {
    throw new Error(`${action} is not a proper action type`);
}

export const reducer: CarSelectionReducer = (state, action) => {
    switch (action.type) {
        case CarSelectionActionType.SET_MAKES_LIST:
            return {
                ...state,
                makesList: action.makesList
            }
        case CarSelectionActionType.SET_SELECTED_MAKE:
            return {
                ...state,
                selectedMake: action.selectedMake
            }
        case CarSelectionActionType.SET_MODELS_LIST:
            return {
                ...state,
                modelsList: action.modelsList
            }
        case CarSelectionActionType.SET_SELECTED_MODEL:
            return {
                ...state,
                selectedModel: action.selectedModel
            }
        case CarSelectionActionType.SET_CARS_LIST:
            return {
                ...state,
                carsList: action.carsList
            }
        default:
            return exhaustiveCheck(action)
    }
}