import React from "react";

export default function About(props) {
  // const [isDark, setDarks] = useState(null);
  // const handleDarkMode = (e) => {
  //   e.preventDefault();
  //   setDarks(!isDark);
  // };
  let darkStyle = {
    backgroundColor: props.darkMode ? "#121212" : "",
    color: props.darkMode ? "white" : "#121212",
  };
  return (
    <div className="container p-2" style={darkStyle}>
      <h2>About Us</h2>
      <div className="accordion" style={darkStyle}>
        <div className="card">
          <div className="card-header" id="headingOne" style={darkStyle}>
            <h5 className="mb-0">
              <button
                style={darkStyle}
                className="btn btn"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Collapsible Group Item #1</strong>
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
            style={darkStyle}
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" style={darkStyle}>
            <h5 className="mb-0">
              <button
                className="btn btn collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={darkStyle}
              >
                <strong>Collapsible Group Item #2</strong>
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body" style={darkStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree" style={darkStyle}>
            <h5 className="mb-0">
              <button
                className="btn  collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                style={darkStyle}
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Collapsible Group Item #3</strong>
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body" style={darkStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
      {/* <button
        className="btn btn-primary mt-2"
        onClick={(e) => {
          handleDarkMode(e);
        }}
      >
        {isDark ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button> */}
    </div>
  );
}
