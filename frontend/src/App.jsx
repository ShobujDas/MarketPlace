import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import UserLoginPage from "./pages/UserLoginPage";
import SingleService from './pages/SingleService';
import UserRegistrationPage from "./pages/UserRegistrationPage.jsx";
import SellerRegPage from "./pages/SellerRegPage.jsx";
import DashHomePage from "./components/Dashboard/DashHomePage.jsx";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/register/user" element={<UserRegistrationPage />} />
          <Route path="/services/:category/:id" element={<SingleService />} />
          <Route path="/become-seller" element={<SellerRegPage />} />
          <Route path="/dashboard/user" element={<DashHomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;