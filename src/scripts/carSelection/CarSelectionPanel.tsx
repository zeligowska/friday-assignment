import React from "react";
import { useCarSelectionContext } from "scripts/context/Context"
import { SelectableStringList } from "../components/selectableStringList/SelectableStringList";
import "./CarSelectionPanel.css";

export const CarSelectionPanel = (): React.ReactElement => {
    const { state, actions } = useCarSelectionContext();
    const { makesList, modelsList } = state;
    const { setSelectedMake, setSelectedModel } = actions;

    return (
        <div className="car-selection-panel">
            <div className="make-selection">
                <SelectableStringList data={makesList} setSelectedElement={setSelectedMake} label="make" />
            </div>
            <div>
                <SelectableStringList data={modelsList} setSelectedElement={setSelectedModel} label="model" />
            </div>
        </div>
    );
}