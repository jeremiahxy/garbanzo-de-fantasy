import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WebFont from 'webfontloader';
import 'semantic-ui-css/semantic.min.css';

WebFont.load({
  google: {
    families: ['Source Sans Pro', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
