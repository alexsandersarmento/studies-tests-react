import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Button from './index';

describe('Button', () => {
  test('should render the button', () => {
    const { getByTestId } = render(<Button>Button</Button>);
    expect(getByTestId('button')).toBeInTheDocument();
  });

  test('should render the button based on the children prop', () => {
    const { getByTestId } = render(<Button>Button</Button>);
    expect(getByTestId('button')).toHaveTextContent('Button');
  });

  test('should call onClick when button is clicked', () => {
    const onClick = vi.fn();
    const { getByTestId } = render(<Button onClick={onClick}>Button</Button>);
    fireEvent.click(getByTestId('button'));
    expect(onClick).toHaveBeenCalled();
  });

  test('Should render the button with the default style', () => {
    const { getByTestId } = render(<Button>Button</Button>);
    expect(getByTestId('button')).toHaveClass('button');
  });
});