import { SetSelectedMake, SetSelectedModel } from "scripts/context/Actions";
import { useCarSelectionContext } from "scripts/context/Context";
import "./SelectableStringListElement.css";

interface SelectableStringListElementProps {
    element: string;
    setSelectedElement: SetSelectedMake | SetSelectedModel;
}

export const SelectableStringListElement = ({ element, setSelectedElement }: SelectableStringListElementProps): React.ReactElement => (
    <div className="makes-list-element" onClick={() => setSelectedElement(element)}>
        <span>{element}</span>
    </div>
);
