import React from "react";
import { SetSelectedMake, SetSelectedModel } from "scripts/context/Actions";
import { SearchInput } from "../searchInput/SearchInput";
import { SelectableStringListHeader } from "./header/SelectableStringListHeader";
import { SelectableStringListElement } from "./listElement/SelectableStringListElement"
import "./SelectableStringList.css";

interface MakesListProps {
    data: string[] | null;
    setSelectedElement: SetSelectedMake | SetSelectedModel;
    label: string
}

export const SelectableStringList = ({ data, setSelectedElement, label }: MakesListProps): React.ReactElement => {
    const [filteredData, setFilteredData] = React.useState(data);

    React.useEffect(() => {
        setFilteredData(data);
    }, [data]);

    return (
        <div className="makes-list">
            <SelectableStringListHeader label={label} />
            <SearchInput data={data} setFilteredData={setFilteredData} />
            {filteredData?.map(element => <SelectableStringListElement element={element} setSelectedElement={setSelectedElement} />)}
        </div>
    )
}