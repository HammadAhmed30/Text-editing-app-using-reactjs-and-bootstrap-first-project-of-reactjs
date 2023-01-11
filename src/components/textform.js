import React from "react";
import { useState } from "react";
// import { isCompositeComponent } from "react-dom/test-utils";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [isBold, setBold] = useState(false);
  const [isitalic, setItalic] = useState(false);
  const handleUpCase = (e) => {
    e.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLowerCase = (e) => {
    e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const clearText = (e) => {
    e.preventDefault();
    setText("");
    setBold(false);
    setItalic(false);
    props.showAlert("Text has been cleared!", "success");
  };
  const makeTextBold = (e) => {
    e.preventDefault();
    setBold(!isBold);
    props.showAlert("Text Bold!", "success");
  };
  const makeTextItalic = (e) => {
    e.preventDefault();
    setItalic(!isitalic);
    props.showAlert("Text Italic!", "success");
  };
  const handleCopyText = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to clipboard!", "success");
  };
  const handleExtraSpaces = (e) => {
    e.preventDefault();
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces have been removed!", "success");
  };
  return (
    <div>
      <style jsx="true">{`
        .bolder {
          font-weight: bolder;
        }
      `}</style>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="io"
            aria-describedby="emailHelp"
            style={{
              background: props.darkMode ? "#121212" : "",
              color: props.darkMode ? "white" : "#121212",
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control io"
            id="io"
            style={{
              background: props.darkMode ? "#121212" : "",
              color: props.darkMode ? "white" : "#121212",
            }}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br />
        <h1 className="form-lable mt-2 mb-2">{props.heading}</h1>
        <textarea
          id="myBox"
          style={{
            background: props.darkMode ? "#121212" : "",
            color: props.darkMode ? "white" : "#121212",
          }}
          value={text}
          className="form-control"
          onChange={(e) => {
            setText(e.target.value);
          }}
          rows="5"
        ></textarea>
        <button
          className="btn btn-primary mt-2 mb-2 ml-1"
          onClick={(e) => {
            handleUpCase(e);
          }}
          disabled={text.length === 0}
        >
          Convert to upperCase
        </button>{" "}
        <button
          className="btn btn-warning mt-2 mb-2"
          onClick={(e) => {
            handleLowerCase(e);
          }}
          disabled={text.length === 0}
        >
          Convert to LowerCase
        </button>{" "}
        <button
          className="btn btn-danger mt-2 mb-2"
          onClick={(e) => {
            clearText(e);
          }}
          disabled={text.length === 0}
        >
          Clear Text
        </button>{" "}
        <button
          className="btn btn-success mt-2 mb-2"
          onClick={(e) => {
            makeTextBold(e);
          }}
          disabled={text.length === 0}
        >
          Make Bold
        </button>{" "}
        <button
          className="btn btn-info mt-2 mb-2"
          onClick={(e) => {
            makeTextItalic(e);
          }}
          disabled={text.length === 0}
        >
          Make Italic
        </button>{" "}
        <button
          className="btn btn-warning mt-2 mb-2"
          onClick={(e) => {
            handleCopyText(e);
          }}
          disabled={text.length === 0}
        >
          Copy text
        </button>{" "}
        <button
          className="btn btn-danger mt-2 mb-2"
          onClick={(e) => {
            handleExtraSpaces(e);
          }}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        {text ? (
          <div>
            <h2 className="mt-2 mb-2">Your Text Summary</h2>
            <p>
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              words and {text.length} characters
            </p>
            <p>{(text.split(" ").length * 0.01).toFixed(1)} min Reading</p>
            <h1 className="mt-2">Preview:</h1>
            <p
              //   className={isBold ? "bolder" : "" isItalic}
              style={{
                fontWeight: isBold ? "bolder" : "normal",
                fontStyle: isitalic ? "italic" : "normal",
              }}
            >
              {text}
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </form>
    </div>
  );
}
