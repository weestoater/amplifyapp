import logo from "./logo.svg";
import "./App.scss";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          React & <i>AWS Amplify</i>
        </h1>
      </header>
    </div>
  );
}

export default App;
