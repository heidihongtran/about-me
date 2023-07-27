import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <AboutMe />
        <Portfolio />
        <footer>
          <a href="https://facebook.com">Facebook</a> |{" "}
          <a href="https://linkedin.com">LinkedIn</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
