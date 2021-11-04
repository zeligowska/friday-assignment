import { MakesListElement } from "./listElement/MakesListElement"
import "./MakesList.css";

interface MakesListProps {
    makes: string[] | null;
}

export const MakesList = ({ makes }: MakesListProps): React.ReactElement => {
    return (
        <div className="makes-list">
            {makes?.map(element => <MakesListElement make={element} />)}
        </div>
    )
}