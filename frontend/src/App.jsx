import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserLoginPage from "./pages/UserLoginPage";
import SingleService from "./pages/SingleService";
import UserRegistrationPage from "./pages/UserRegistrationPage.jsx";
import SellerRegPage from "./pages/SellerRegPage.jsx";
import DashHomePage from "./components/Dashboard/DashHomePage.jsx";
import AllServices from "./pages/AllServices.jsx";
import ScrollToTop from "./ScrollToTop";
import BuyerProfile from "./pages/BuyerProfile.jsx";
import Creategigpage from './components/Dashboard/Creategigpage';
import Allgig from './components/Dashboard/Allgig';
import SellerProfile from "./pages/SellerProfile.jsx";
import MessagePage from "./pages/MessagePage.jsx";

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
            <Route path="/dashboard" element={<DashHomePage />} />
            <Route path="/dashboard/create-gig" element={<Creategigpage />} />
            <Route path="/dashboard/all-gig" element={<Allgig />} />
            <Route path="/profile" element={<BuyerProfile />} />
            <Route path="/profile/:id" element={<SellerProfile />} />
            <Route path="/message" element={<MessagePage />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
