import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./screens/homepage/homepage.component";
import ShopPage from "./screens/shop/shop.component";
import Header from "./components/header/header.component";
import SignUpAndSignIn from "./screens/signin-signup/signinsignup";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
      return () => {
        unsubscribeFromAuth()
      }
    });
  }, [currentUser]);


  return (
    <div>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignUpAndSignIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
