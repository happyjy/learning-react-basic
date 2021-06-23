import logo from "./logo.svg";
import "./App.css";
import Controlled from "./components/Controlled/Controlled";
import Uncontrolled from "./components/1.Controlled&Uncontrolled_Component/Uncontrolled/Uncontrolled";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Controlled></Controlled>
        <Uncontrolled></Uncontrolled>
      </header>
    </div>
  );
}

export default App;
