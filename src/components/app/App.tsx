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
import appStyles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { closeDetails } from "../../services/ingredient-details/details-actions";
import OrderDetails from "../order-details/order-details";
import { closeOrderDetails } from "../../services/order/order-actions";
import Home from "../../pages/home-page/home";
import ProtectedRoute from "../protected-route";
import LoginContainer from "../../pages/login-page/login-container";
import RegisterContainer from "../../pages/register-page/register-container";
import RestoreContainer from "../../pages/restore-page/restore-container";
import ResetContainer from "../../pages/reset-page/reset-container";
import ProfileContainer from "../../pages/profile-page/profile-container";
import { loadIngredientsStart } from "../../services/ingredients/ingredients-actions";
import IngredientPage from "../../pages/ingredient-page/ingredient";
import  ProtectedRouteOrder  from "../protected-route-order";


function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadIngredientsStart());
  }, [dispatch]);

  const background = location.state && location.state.background;

  const goBack = () => navigate(-1);

  //Modal Ingredient
  const { showModal } = useSelector((state: any) => state.details);
  const handleClick = () => {
    dispatch(closeDetails());
    goBack();
  };

  //ModalOrder
  const { showOrderModal } = useSelector((state: any) => state.orderReducer);
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
              <LoginContainer />
            </ProtectedRoute>
          }
        />

        <Route
          path="register"
          element={
            <ProtectedRoute>
              <RegisterContainer />
            </ProtectedRoute>
          }
        />

        <Route
          path="restore-password"
          element={
            <ProtectedRoute>
              <RestoreContainer />
            </ProtectedRoute>
          }
        />

        <Route
          path="reset-password"
          element={
            <ProtectedRoute>
              <ResetContainer />
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
