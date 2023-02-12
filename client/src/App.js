import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
// utils and redux
import { auth, fetchUserData } from "./utils/firebase";
import { login, logOut, selectUser } from "./features/userSlice";
// components and css
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Payment from "./pages/payment/Payment";

function App() {
  // to select item from redux store
  const user = useSelector(selectUser);
  // to push to redux store
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // logged in and fetch user-data from firestore
        fetchUserData(user.uid).then((data) => {
          dispatch(
            login({
              uid: user.uid,
              email: user.email,
              plan: data.plan,
            })
          );
        });
      } else {
        // logged out
        dispatch(logOut());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  console.log(user);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
