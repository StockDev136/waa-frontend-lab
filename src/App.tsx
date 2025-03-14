import "./App.css";
import Dashboard from "./components/Dashboard";
import DataContext from "./components/DataContext";

function App() {
  return (
    <>
      <DataContext>
        <Dashboard />
      </DataContext>
    </>
  );
}

export default App;
