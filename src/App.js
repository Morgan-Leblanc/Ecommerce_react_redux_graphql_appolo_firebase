import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./screens/homepage/homepage.component";
import ShopPage from "./screens/shop/shop.component"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
         <Route exact path="/" component={Homepage} />
         <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
