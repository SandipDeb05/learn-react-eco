import logo from "./logo.svg";
import "./App.css";
import Application from "./components/Application/Application";
import Skills from "./components/Skills/Skills";
import Counter from "./components/Counter/Counter";

import AppProviders from "./components/Providers/AppProviders";
import MuiMode from "./components/Mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
