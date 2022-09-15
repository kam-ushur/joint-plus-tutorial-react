import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders JointJS paper', async () => {
    render(<App />);

    const element  = await screen.findByText('lorem')
    expect(element).toBeInTheDocument();

});
