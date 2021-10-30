import "./App.css";
import PathVisualizer from "./PathVisualizer/PathVisualizer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PathVisualizer />

      <div className="footer">
        <p>Made by Samuel Christopher Swandi</p>
      </div>
    </div>
  );
}

export default App;
