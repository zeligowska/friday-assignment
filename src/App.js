import { CarsDataProvider } from "./scripts/carSelection/CarsDataProvider";
import { CarSelectionPanel } from "./scripts/carSelection/CarSelectionPanel";
import { CarSelectionContextProvider } from "./scripts/context/Context";

function App() {
  return (
    <CarSelectionContextProvider>
      <CarsDataProvider>
        <CarSelectionPanel />
      </CarsDataProvider>
    </CarSelectionContextProvider>
  );
}

export default App;
