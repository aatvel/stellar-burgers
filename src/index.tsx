import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home-page/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/protected-route";
import { Provider } from "react-redux";
import { store } from "./services/store";
import LoginContainer from "./pages/login-page/login-container";
import RegisterContainer from "./pages/register-page/register-container";
import RestoreContainer from "./pages/restore-page/restore-container";
import ResetContainer from "./pages/reset-page/reset-container";
import ProfileContainer from "./pages/profile-page/profile-container";
// import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<LoginContainer />} />

        <Route path="/register" element={<RegisterContainer />} />

        <Route path="/restore-password" element={<RestoreContainer />} />

        <Route path="/reset-password" element={<ResetContainer />} />

        <Route
          path="/profile"
          element={
            // <ProtectedRoute>
              <ProfileContainer />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
