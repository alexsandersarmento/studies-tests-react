import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, expect, test, beforeEach, vi } from 'vitest';
import LoginForm from './index';

describe('Input', () => {
  const onSubmit = vi.fn(e => e.preventDefault());

  beforeEach(() => {
    render(<LoginForm onSubmit={onSubmit}/>);
  });

  test('Should render email input', () => {
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
  });

  test('Should render password input', () => {
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
  });

  test('Should render login button', () => {
    const loginButton = screen.getByTestId('login-button');
    expect(loginButton).toHaveTextContent('Entrar');
  });

  test('Should update state when typing on email input', () => {
    const emailInput = screen.getByTestId('email-input') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'email@test.com' } });
    expect(emailInput.value).toEqual('email@test.com');
  });

  test('Should update state when typing on password input', () => {
    const passwordInput = screen.getByTestId('password-input') as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput.value).toEqual('password123');
  });

  test('Should call login function when clicking on login button', () => {
    const button = screen.getByTestId('login-button');
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(1)
  });
});