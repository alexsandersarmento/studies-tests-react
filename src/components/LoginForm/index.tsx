import React from "react";
import Button from "../Button";
import Input from "../Input";
import "./styles.css";

interface LoginFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  return (
    <form className="form" data-testid="login-form" onSubmit={onSubmit}>
      <Input type="email" placeholder="E-mail" data-testid="email-input"/>
      <Input type="password" placeholder="Senha" data-testid="password-input" />
      <Button type="submit" data-testid="login-button">Entrar</Button>
    </form>
  )
};

export default LoginForm;