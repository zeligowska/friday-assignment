import React, { useReducer } from "react";
import { CarSelectionState } from "../model/CarSelectionState";
import { CarSelectionActions, CarSelectionActionType, SetCarsList, SetMakesList, SetModelsList, SetSelectedMake, SetSelectedModel } from "./Actions";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

interface CarSelectionContext {
    state: CarSelectionState,
    dispatch: React.Dispatch<CarSelectionActions>
}

const CarSelectionContext = React.createContext<CarSelectionContext | undefined>(undefined);

interface CarSelectionContextProvider {
    children: React.ReactNode;
}

const CarSelectionContextProvider = ({ children }: CarSelectionContextProvider): React.ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextValue = React.useMemo(() => ({ state, dispatch }), [state]);

    return <CarSelectionContext.Provider value={contextValue}>{children}</CarSelectionContext.Provider>;
};

interface CarSelectionContextActions {
    setMakesList: SetMakesList;
    setSelectedMake: SetSelectedMake;
    setModelsList: SetModelsList;
    setSelectedModel: SetSelectedModel;
    setCarsList: SetCarsList;
}

interface UseCarSelectionContext {
    (): {
        state: CarSelectionState;
        actions: CarSelectionContextActions
    }
}

const useCarSelectionContext: UseCarSelectionContext = () => {
    const context = React.useContext<CarSelectionContext | undefined>(CarSelectionContext);

    if (!context) {
        throw new Error("Car selection context consumer must have a car selection context provider as a parent");
    }

    const { dispatch, state } = context;

    const setMakesList: SetMakesList = React.useCallback(makesList => {
        dispatch({ type: CarSelectionActionType.SET_MAKES_LIST, makesList });
    }, [dispatch]);

    const setSelectedMake: SetSelectedMake = React.useCallback(selectedMake => {
        dispatch({ type: CarSelectionActionType.SET_SELECTED_MAKE, selectedMake });
    }, [dispatch]);

    const setModelsList: SetModelsList = React.useCallback(modelsList => {
        dispatch({ type: CarSelectionActionType.SET_MODELS_LIST, modelsList });
    }, [dispatch]);

    const setSelectedModel: SetSelectedModel = React.useCallback(selectedModel => {
        dispatch({ type: CarSelectionActionType.SET_SELECTED_MODEL, selectedModel });
    }, [dispatch]);

    const setCarsList: SetCarsList = React.useCallback(carsList => {
        dispatch({ type: CarSelectionActionType.SET_CARS_LIST, carsList });
    }, [dispatch]);

    const actions = {
        setMakesList,
        setSelectedMake,
        setModelsList,
        setSelectedModel,
        setCarsList
    }

    return {
        state,
        actions
    }
}

export {
    CarSelectionContext,
    CarSelectionContextProvider,
    useCarSelectionContext
}
