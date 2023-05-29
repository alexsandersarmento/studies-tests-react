import { ButtonHTMLAttributes } from 'react';
import './styles.css'

type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest } : ButtonProps) => {
  return <button data-testid="button" className='button' {...rest}>{children}</button>;
};

export default Button;