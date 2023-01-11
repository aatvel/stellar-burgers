import * as React from "react";
import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../utils/types";

import appStyles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { closeDetails } from "../../services/ingredient-details/details-actions";
import OrderDetails from "../order-details/order-details";
import { closeOrderDetails } from "../../services/order/order-actions";
import Home from "../../pages/home-page/home";
import ProtectedRoute from "../protected-route";
import Login  from "../../pages/login-page/login";
import ProfileContainer from "../../pages/profile-page/profile-container";
import { loadIngredientsStart } from "../../services/ingredients/ingredients-actions";
import IngredientPage from "../../pages/ingredient-page/ingredient";
import  ProtectedRouteOrder  from "../protected-route-order";
import Register from "../../pages/register-page/register";
import Reset from "../../pages/reset-page/reset";
import Restore from "../../pages/restore-page/restore";


function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadIngredientsStart());
  }, [dispatch]);

  const background = location.state && location.state.background;

  const goBack = () => navigate(-1);

  //Modal Ingredient
  const { showModal } = useAppSelector((state: any) => state.details);
  const handleClick = () => {
    dispatch(closeDetails());
    goBack();
  };

  //ModalOrder
  const { showOrderModal } = useAppSelector((state: any) => state.orderReducer);
  const handleClickOrder = () => {
    dispatch(closeOrderDetails());
 
  };

  return (
    <div className={appStyles.page}>
      <AppHeader />
      <Routes location={showModal ? background : location}>
        <Route index element={<Home />} />

        <Route
          path="login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />

        <Route
          path="register"
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />

        <Route
          path="restore-password"
          element={
            <ProtectedRoute>
              <Restore />
            </ProtectedRoute>
          }
        />

        <Route
          path="reset-password"
          element={
            <ProtectedRoute>
              <Reset />
            </ProtectedRoute>
          }
        />

        <Route
          path="profile"
          element={
            <ProtectedRoute anonymous={false}>
              <ProfileContainer />
            </ProtectedRoute>
          }
        />

        <Route
          path="ingredients/:_id"
          element={<IngredientPage />}
        ></Route>
      </Routes>

      {showModal && (
        <Routes>
          <Route
            path="ingredients/:_id"
            
            element={
              <Modal
                title="Детали ингредиента"
                closeModal={handleClick}
                children={<IngredientDetails background={background} />}
              />
            }
          />
        </Routes>
      )}

      {showOrderModal && (
        <ProtectedRouteOrder >       
        <Modal closeModal={handleClickOrder}>
          <OrderDetails />
        </Modal>
        </ProtectedRouteOrder>
      )}
    </div>
  );
}

export default App;
