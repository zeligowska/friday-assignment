import "./MakesListElement.css";

interface MakesListElementProps {
    make: string
}

export const MakesListElement = ({ make }: MakesListElementProps): React.ReactElement => {
    return (
        <div className="makes-list-element">
            <span>{make}</span>
        </div>
    )
}