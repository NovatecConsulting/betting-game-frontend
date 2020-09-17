import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Standings from './Standings';

describe('<Standings />', () => {
  test('it should mount', () => {
    render(<Standings />);
    
    const standings = screen.getByTestId('Standings');

    expect(standings).toBeInTheDocument();
  });
});