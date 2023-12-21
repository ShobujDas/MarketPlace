import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserLoginPage from "./pages/UserLoginPage";
import SingleService from "./pages/SingleService";
import UserRegistrationPage from "./pages/UserRegistrationPage.jsx";
import SellerRegPage from "./pages/SellerRegPage.jsx";
import AllServices from "./pages/AllServices.jsx";
import ScrollToTop from "./ScrollToTop";
import BuyerProfile from "./pages/BuyerProfile.jsx";
import SellerProfile from "./pages/SellerProfile.jsx";
import MessagePage from "./pages/MessagePage.jsx";
import SellerDashBoard from "./pages/SellerDashBoard.jsx";
import MailVerification from "./pages/MailVerification.jsx";
import AllCategories from "./pages/AllCategories.jsx";

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
            <Route path="/dashboard" element={<SellerDashBoard />} />
            <Route path="/profile" element={<BuyerProfile />} />
            <Route path="/profile/:id" element={<SellerProfile />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="/verify" element={<MailVerification />} />
            <Route path="/all-category" element={<AllCategories />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
