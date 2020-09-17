import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutUs from './AboutUs';

describe('<AboutUs />', () => {
  test('it should mount', () => {
    render(<AboutUs />);
    
    const aboutUs = screen.getByTestId('AboutUs');

    expect(aboutUs).toBeInTheDocument();
  });
});