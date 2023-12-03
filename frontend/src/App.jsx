import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import UserLoginPage from "./pages/UserLoginPage";
import SingleService from './pages/SingleService';
import UserRegistrationPage from "./pages/UserRegistrationPage.jsx";
import SellerRegPage from "./pages/SellerRegPage.jsx";
import DashHomePage from "./components/Dashboard/DashHomePage.jsx";
import AllServices from "./pages/AllServices.jsx";
import ScrollToTop from './ScrollToTop';
import BuyerProfile from "./pages/BuyerProfile.jsx";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/register/user" element={<UserRegistrationPage />} />
            <Route path="/services/:category/:id" element={<SingleService />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/become-seller" element={<SellerRegPage />} />
            <Route path="/dashboard/user" element={<DashHomePage />} />
            <Route path="/profile/:id" element={<BuyerProfile />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;