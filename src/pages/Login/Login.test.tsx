import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { describe, expect, test, beforeEach } from 'vitest';
import Login from './index';

describe('Login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  test('Should render login title', () => {
    const loginTitle = screen.getByTestId('login-title');
    expect(loginTitle).toHaveTextContent('Login');
  });

  test('Should render login form', () => {
    const loginForm = screen.getByTestId('login-form');
    expect(loginForm).toBeInTheDocument();
  });
});
