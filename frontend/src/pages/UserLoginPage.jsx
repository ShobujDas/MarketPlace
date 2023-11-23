import LoginForm from "../components/forms/LoginForm";
import MasterLayout from './../components/layouts/MasterLayout';

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