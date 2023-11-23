import { useState } from "react";
import { useParams } from "react-router-dom";
import '../../assets/loginPage.css'


const LoginForm = () => {

  const isSeller = useParams()
  const [data, setData] = useState({
    email : "",
    password: ""
  })

  return (
    <section className="login-form" id="login-form">
      <div className="content">
        
      </div>
    </section>
  );
};

export default LoginForm;