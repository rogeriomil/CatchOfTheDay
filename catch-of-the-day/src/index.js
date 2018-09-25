import React, { Component } from "react";
import { render } from "react-dom";
import "./css/style.css";

//components
import StorePicker from "./components/StorePicker";
import App from "./components/App";
import Router from "./components/Router";

render(<Router />, document.querySelector("#main"));
