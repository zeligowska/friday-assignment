import React from "react";
import "./SearchInput.css";

interface SearchInputProps {
    data: string[] | null;
    setFilteredData: (data: string[] | null) => void;
}

export const SearchInput = ({ data, setFilteredData }: SearchInputProps): React.ReactElement => {
    const ref = React.useRef<HTMLInputElement>(null);

    function filterByInputValue() {
        if (ref.current && data) {
            const filteredData = data.filter(item => {
                return item.toUpperCase().includes(ref.current ? ref.current.value.toUpperCase() : "");
            });
            setFilteredData(filteredData);
        }
    }

    return (
        <input type="text" ref={ref} onChange={filterByInputValue} placeholder="Search..." className="search-input" />
    )
}