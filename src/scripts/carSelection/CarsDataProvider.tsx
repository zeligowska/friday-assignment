import React from "react";
import { useCarSelectionContext } from "scripts/context/Context";
import useFetch from "use-http";

interface CarsDataProviderProps {
    children: React.ReactNode
}

const GET_MAKES_LIST_URL = "/api/makes";
const getModelsUrl = (make: string): string => `/api/models?make=${make}`;
const getCarsUrl = (make: string, model: string): string => `/api/vehicles?make=${make}&model=${model}`;

export const CarsDataProvider = ({ children }: CarsDataProviderProps): React.ReactElement => {
    const { actions, state } = useCarSelectionContext();
    const { setMakesList, setModelsList, setCarsList } = actions;
    const { selectedMake, selectedModel } = state;
    const { get, response, loading, error } = useFetch("http://localhost:8080");

    async function getMakesList() {
        const makes = await get(GET_MAKES_LIST_URL);
        if (response.ok) {
            setMakesList(makes);
        } // todo obsługa błędu 
    }

    async function getModelsList() {
        const url = selectedMake ? getModelsUrl(selectedMake) : "";
        const models = await get(url);
        if (response.ok) {
            setModelsList(models);
        } // todo obsługa błędu 
    }

    async function getCarsList() {
        const url = (selectedMake && selectedModel) ? getCarsUrl(selectedMake, selectedModel) : "";
        const cars = await get(url);
        if (response.ok) {
            setCarsList(cars);
        } // todo obsługa błędu 
    }
    
    React.useEffect(() => {
        getMakesList()
    }, []);

    React.useEffect(() => {
        if (selectedMake) {
            getModelsList();
        }
    }, [selectedMake])

    React.useEffect(() => {
        if (selectedMake && selectedModel) {
            getCarsList();
        }
    }, [selectedMake, selectedModel])

    return loading ? (
        <span>loading data...</span>
    ) : (
        <>{children}</>
    )
}