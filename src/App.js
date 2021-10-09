import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import "./styles.css";
import ViewPdf from "./components/ViewPdf";

export default function App() {
  return (
    <div className="App">
      <Router>
          <Link class="btn btn-primary" to="/view-pdf" >View Pdf</Link>
          <Route exact path="/view-pdf" component={ViewPdf}/>
      </Router>
     
    </div>
  );
}
