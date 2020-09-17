import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Matches from './Matches';

describe('<Matches />', () => {
  test('it should mount', () => {
    render(<Matches />);
    
    const matches = screen.getByTestId('Matches');

    expect(matches).toBeInTheDocument();
  });
});