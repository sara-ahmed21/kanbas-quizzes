import { Routes, Route, Link } from "react-router-dom";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";


function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <a href="http://localhost:4000/a5/welcome"> 
          Welcome 
          </a>
          <EncodingParametersInURLs/>
          <WorkingWithObjects/>
          <WorkingWithArrays/>
      </div>
    );
  }
  export default Assignment5;