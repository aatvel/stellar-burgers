import React from "react";
import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import appStyles from "./app.module.css";
import AppHeader from "../../components/app-header/app-header";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { closeDetails } from "../../services/ingredient-details/details-actions";
import OrderDetails from "../../components/order-details/order-details";
import { closeOrderDetails } from "../../services/order/order-actions";
import Home from "../home-page/home";
import { ProtectedRoute } from "../../components/protected-route";
import { ProtectedRouteAuth } from "../../components/protected-route-auth";
import LoginContainer from "../login-page/login-container";
import RegisterContainer from "../register-page/register-container";
import RestoreContainer from "../restore-page/restore-container";
import ResetContainer from "../reset-page/reset-container";
import ProfileContainer from "../profile-page/profile-container";
import { loadIngredientsStart } from "../../services/ingredients/ingredients-actions";
import { IngredientPage } from "../ingredient-page/ingredient";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadIngredientsStart());
  }, [dispatch]);
  const params = useParams();
  // console.log(params)
  const background = location.state && location.state.background;

  const goBack = () => navigate(-1);

  //Modal Ingredient
  const { showModal } = useSelector((state) => state.details);
  const handleClick = () => {
    dispatch(closeDetails());
    goBack();
  };

  //ModalOrder
  const { showOrderModal } = useSelector((state) => state.orderReducer);
  const handleClickOrder = () => {
    dispatch(closeOrderDetails());
  };

  return (
    <div className={appStyles.page}>
      <AppHeader />
      <Routes location={background || location}>
        <Route index element={<Home />} />

        <Route
          path="login"
          element={
            <ProtectedRouteAuth>
              <LoginContainer />
            </ProtectedRouteAuth>
          }
        />

        <Route
          path="register"
          element={
            <ProtectedRouteAuth>
              <RegisterContainer />
            </ProtectedRouteAuth>
          }
        />

        <Route
          path="restore-password"
          element={
            <ProtectedRouteAuth>
              <RestoreContainer />
            </ProtectedRouteAuth>
          }
        />

        <Route
          path="reset-password"
          element={
            <ProtectedRouteAuth>
              <ResetContainer />
            </ProtectedRouteAuth>
          }
        />

        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <ProfileContainer />
            </ProtectedRoute>
          }
        />

        <Route
          path="ingredients/:_id"
          element={<IngredientPage background={background} />}
        >
        </Route >
      </Routes>

      {showModal && (
        <Routes>
          <Route
            path="ingredients/:_id"
            location={background}
            render={ () =>{
              <Modal
                title="Детали ингредиента"
                closeModal={handleClick}
                children={<IngredientDetails background={background} />}
              />}
            }
          /> 
        </Routes>
      )}

      {showOrderModal && (
        <ProtectedRoute>
          <Modal closeModal={handleClickOrder}>
            <OrderDetails />
          </Modal>
        </ProtectedRoute>
      )}
    </div>
  );
}

export default App;
