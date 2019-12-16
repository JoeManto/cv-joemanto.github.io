import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders learn react link', () => {
    const { queryByTestId } = render(<App />);

    const AppHeader = queryByTestId('app-test-header');
    expect(AppHeader).toBeInTheDocument();

  });
});



