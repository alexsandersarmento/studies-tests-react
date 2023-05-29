import React from "react";
import LoginForm from "../../components/LoginForm";
import "./styles.css";

const Login: React.FC = () => {
  return (
    <div className="container">
      <h1 data-testid="login-title">Login</h1>

      <LoginForm onSubmit={() => {}} />
    </div>
  )
};

export default Login;