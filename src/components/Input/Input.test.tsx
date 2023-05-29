import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, expect, test, beforeEach } from 'vitest';
import Input from './index';

describe('Input', () => {
  beforeEach(() => {
    render(<Input/>);
  });

  test('should render the Input', () => {
    const input = screen.getByTestId('input') as HTMLInputElement;
    expect(input).toBeInTheDocument();
  });
  
  test('should update the Input value when typing', () => {
    const input = screen.getByTestId('input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  test('Should render the Input with the default style', () => {
    const input = screen.getByTestId('input') as HTMLInputElement;
    expect(input).toHaveClass('input');
  });
});