import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./screens/homepage/homepage.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
         <Route exact path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
