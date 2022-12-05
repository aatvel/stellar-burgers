import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home-page/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/protected-route";
import { ProtectedRouteAuth } from "./components/protected-route-auth";
import { Provider } from "react-redux";
import { store } from "./services/store";
import LoginContainer from "./pages/login-page/login-container";
import RegisterContainer from "./pages/register-page/register-container";
import RestoreContainer from "./pages/restore-page/restore-container";
import ResetContainer from "./pages/reset-page/reset-container";
import ProfileContainer from "./pages/profile-page/profile-container";
import IngredientDetails from "./components/ingredient-details/ingredient-details";
// import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <ProtectedRouteAuth>
              <LoginContainer />
            </ProtectedRouteAuth>
          }
        />

        <Route
          path="/register"
          element={
            <ProtectedRouteAuth>
              <RegisterContainer />
            </ProtectedRouteAuth>
          }
        />

        <Route
          path="/restore-password"
          element={
            <ProtectedRouteAuth>
              <RestoreContainer />
            </ProtectedRouteAuth>
          }
        />

        <Route
          path="/reset-password"
          element={
            <ProtectedRouteAuth>
              <ResetContainer />
            </ProtectedRouteAuth>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileContainer />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
