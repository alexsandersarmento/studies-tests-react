import { InputHTMLAttributes } from 'react';
import './styles.css';

const Input = ({ ...rest } : InputHTMLAttributes<HTMLInputElement>) => {
  return <input data-testid="input" className='input' {...rest}/>;
};

export default Input;