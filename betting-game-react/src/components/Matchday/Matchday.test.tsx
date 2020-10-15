import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Matchday from './Matchday';

describe('Component that displays the match days', () => {
  test('it should mount', () => {
    render(<Matchday />);

    const matchday = screen.getByTestId('Matchday');

    expect(matchday).toBeInTheDocument();
  });
});
