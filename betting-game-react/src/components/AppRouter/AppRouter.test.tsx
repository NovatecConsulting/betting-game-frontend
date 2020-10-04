import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppRouter from './AppRouter';

describe('<AppRouter />', () => {
  test('it should mount', () => {
    render(<AppRouter />);
    
    const appRouter = screen.getByTestId('AppRouter');

    expect(appRouter).toBeInTheDocument();
  });
});