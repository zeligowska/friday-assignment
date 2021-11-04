import React, { useEffect } from "react";
import { useCarSelectionContext } from "scripts/context/Context";
import useFetch from "use-http";

interface CarsDataProviderProps {
    children: React.ReactNode
}

const GET_MAKES_LIST_URL = "/api/makes";

export const CarsDataProvider = ({ children }: CarsDataProviderProps): React.ReactElement => {
    const { actions } = useCarSelectionContext();
    const { setMakesList } = actions;
    const { get, response, loading, error } = useFetch("http://localhost:8080");

    async function getMakesList() {
        const makes = await get(GET_MAKES_LIST_URL);
        if (response.ok) {
            setMakesList(makes);
        }
    }
    
    useEffect(() => {
        getMakesList()
    }, []);

    return loading ? (
        <span>loading data...</span>
    ) : (
        <>{children}</>
    )
}