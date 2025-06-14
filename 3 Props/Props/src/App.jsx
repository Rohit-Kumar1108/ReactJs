import "./App.css";
import ErrorMsg from "./Components/ErrorMsg";
import FoodItem from "./Components/FoodItem";

function App() {
  return (
   <div className="contener">
    <ErrorMsg/>
    <FoodItem/>
   </div>
  );
}

export default App;
