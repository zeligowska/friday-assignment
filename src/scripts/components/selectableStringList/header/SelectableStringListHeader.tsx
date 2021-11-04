import "./SelectableStringListHeader.css";

interface SelectableStringListHeaderProps {
    label: string;
}

export const SelectableStringListHeader = ({ label }: SelectableStringListHeaderProps): React.ReactElement => {
    return (
        <div className="makes-list-header">
            <span>{`Pick car ${label}: `}</span>
        </div>
    )
}