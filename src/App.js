import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import Homepage from "./screens/homepage/homepage.component";
import ShopPage from "./screens/shop/shop.component";
import Header from "./components/header/header.component";
import SignUpAndSignIn from "./screens/signin-signup/signinsignup";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          dispatch({ type: "SET_CURRENT_USER", payload: userAuth });
        });
      }
      setCurrentUser(userAuth);
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, []);
  console.log(currentUser);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignUpAndSignIn />
            }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
