import logo from "./logo.svg";
import "./App.css";
import Bmi from "./Components/Bmi";
import Cicilan from "./Components/Cicilan";
import Ppn from "./Components/Ppn";
import Konversi from "./Components/Konversi";

function App() {
  return (
    // <div className="parent-box">
    <div className="container">
      <div className="row">
        <Bmi />
        <Cicilan />
        <Ppn />
        <Konversi />
      </div>
    </div>
    // </div>
  );
}

export default App;
