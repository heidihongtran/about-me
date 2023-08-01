import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="main">
        <AboutMe />
        <Portfolio />
        <footer>
          <a href="https://github.com/heidihongtran/">Github</a>{" "}
          <a href="https://www.linkedin.com/in/hong-heidi-tran/">LinkedIn</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
