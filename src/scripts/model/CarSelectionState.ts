import { Car } from "./Car";

export interface CarSelectionState {
    makesList: string[] | null;
    selectedMake: string | null;
    modelsList: string[] | null;
    selectedModel: string | null;
    carsList: Car[] | null;
}
