import { useCarSelectionContext } from "scripts/context/Context"
import { MakesList } from "./makesList/MakesList";

export const CarSelectionPanel = (): React.ReactElement => {
    const { state: { makesList } } = useCarSelectionContext();

    console.log(makesList);

    return (
        <MakesList makes={makesList} />
    );
}