import "./App.css";
import Spage from "./components/Spage";
import ReactGA from "react-ga";

ReactGA.initialize("G-MQX64RFL0Q");

function App() {
  return (
    <div className="App">
      <Spage></Spage>
    </div>
  );
}

export default App;
