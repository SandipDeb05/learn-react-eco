import logo from "./logo.svg";
import "./App.css";
import Application from "./components/Application/Application";
import Skills from "./components/Skills/Skills";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={["HTML", "CSS", "JS"]} /> */}
      <Counter />
    </div>
  );
}

export default App;
