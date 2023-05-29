import React, { FormEvent } from "react";
import LoginForm from "../../components/LoginForm";
import "./styles.css";

const Login: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('OnSubmit');
  };

  return (
    <div className="container">
      <h1 data-testid="login-title">Login</h1>

      <LoginForm onSubmit={handleSubmit} />
    </div>
  )
};

export default Login;