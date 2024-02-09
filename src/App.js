import "./App.css";
import "./index.css";
import Weather from "./Weather";
import "./Weather.css";
function App() {
  return (
    <div className="App">
      <Weather city="Durban" />
      <div>
        This project was coded by
        <a
          href="https://github.com/1543-STACK/weather-application"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Anu Govender{" "}
        </a>{" "}
        and is
        <a
          href="https://gthub.com/1543-STACK/weather-application"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          on GitHub
        </a>{" "}
        and
        <a
          href="https://ubiquitous-cranachan-a74527.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          hosted on Netlify
        </a>
      </div>
    </div>
  );
}
export default App;
