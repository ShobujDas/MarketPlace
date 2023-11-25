import LoginForm from "../components/forms/LoginForm";
import MasterLayout from './../components/layouts/MasterLayout';
import UserRegistrationForm from "../components/forms/UserRegistrationForm.jsx";

const UserLoginPage = () => {
  return (
    <>
      <MasterLayout>
        <LoginForm />
      </MasterLayout>
    </>
  );
};

export default UserLoginPage;