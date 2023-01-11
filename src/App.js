import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/textform";
import About from "./components/About";
import Alert from "./components/Alert";
import ColorBar from "./components/ColorBar";
import { Route, Routes } from "react-router-dom";
import Books from "./components/Books";

export default function App() {
  const [alert, setAlert] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(false);

  const toggleMode = () => {
    document.body.style.color = !darkMode ? "white" : "#121212";
    document.body.style.backgroundColor = !darkMode ? "#121212" : "";
    setDarkMode(!darkMode);
    if (darkMode) {
      showAlert("Dark Mode is Enable", "success");
    } else {
      showAlert("Dark Mode is Disbaled", "success");
    }
  };
  const showTheme = () => {
    setTheme(!theme);
  };
  const colorTheme = (color) => {
    // setDarkMode(true);
    document.body.style.color = "white";
    var textAreaTag = document.getElementById("myBox");
    const inputTypes = document.getElementById("io");
    if (color === "red") {
      document.body.style.backgroundColor = "#240000";
      textAreaTag.style.backgroundColor = "#240000";
      inputTypes.style.backgroundColor = "#240000";
    } else if (color === "blue") {
      textAreaTag.style.backgroundColor = "#000d24";
      document.body.style.backgroundColor = "#000d24";
      inputTypes.style.backgroundColor = "#000d24";
    } else if (color === "green") {
      textAreaTag.style.backgroundColor = "#00240a";
      document.body.style.backgroundColor = "#00240a";
      inputTypes.style.backgroundColor = "#00240a";
      document.title = "Green";
      setTimeout(() => {
        document.title = "Yellow";
      }, 3000);
      setTimeout(() => {
        document.title = "Black";
      }, 1500);
    }
  };

  const showAlert = (msg, type) => {
    setAlert({
      msg,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <div>
      <style js="true">
        {`
        .color-theme-menus {
          height: 0px;
          transition: all 200ms ease;
          // background-color: black;

          overflow: hidden;
          position: absolute;
          right: 0;
          display: flex;
          margin: auto;
          // flex-direction: row;
          justify-content: center;
          // align-items: center;
        }
      `}
      </style>
      <Navbar
        title="Blogs"
        aboutText="About"
        mode={darkMode}
        toggleMode={toggleMode}
        showTheme={showTheme}
      />

      {/* {theme && ( */}
      <div
        className="color-theme-menus"
        style={{
          height: theme ? "50px" : "0px",
        }}
      >
        <ColorBar colorTheme={colorTheme} />
      </div>
      {/* )} */}

      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="container mt-3">
              <Textform
                heading="Enter Text Below"
                darkMode={darkMode}
                showAlert={showAlert}
              />
            </div>
          }
        />
        <Route exact path="/about" element={<About darkMode={darkMode} />} />
        {/* </Route> */}
        <Route path="/books/:id" element={<Books />} />
      </Routes>
    </div>
  );
}
