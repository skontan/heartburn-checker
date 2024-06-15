import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App integration tests', () => {
  it('displays "rest and come back later" outcome', async () => {
    render(<App />);

    // Click through the entire questionnaire
    fireEvent.click(screen.getByText('Yes')); // Question 1
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('No')); // Question 2
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('0-3 days')); // Question 3
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('0-3 days')); // Question 4
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('0-3 days')); // Question 5
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('0-3 days')); // Question 6
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('0-3 days')); // Question 7
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('No')); // Question 8
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('No')); // Question 9
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('No')); // Question 10
    fireEvent.click(screen.getByText('Next'));

    // Verify outcome text
    expect(
      screen.getByText(
        'Your symptom description indicates that this is a self-healing condition. We recommend that you rest for few days. Contact a doctor if your condition gets worse or if symptoms remain for more than three days.',
      ),
    ).toBeInTheDocument();
    expect(screen.queryByDisplayValue('Book a meeting')).not.toBeInTheDocument();
  });

  it('displays "see_a_doctor" outcome', async () => {
    render(<App />);

    // Click through the entire questionnaire
    fireEvent.click(screen.getByText('Yes')); // Question 1
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('No')); // Question 2
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('4-7 days')); // Question 3
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('4-7 days')); // Question 4
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('4-7 days')); // Question 5
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('4-7 days')); // Question 6
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('0-3 days')); // Question 7
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('No')); // Question 8
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('No')); // Question 9
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('No')); // Question 10
    fireEvent.click(screen.getByText('Next'));

    // Verify outcome text
    expect(
      screen.getByText(
        'Your symptom description indicates that you are in need of medical care. Book an appointment with a doctor as soon as possible.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Book a meeting')).toBeInTheDocument();
  });

  it('displays "go_to_emergency_room" outcome', async () => {
    render(<App />);

    // Click through the entire questionnaire
    fireEvent.click(screen.getByText('Yes')); // Question 1
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('No')); // Question 2
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('4-7 days')); // Question 3
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('4-7 days')); // Question 4
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('4-7 days')); // Question 5
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('4-7 days')); // Question 6
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('4-7 days')); // Question 7
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('Yes')); // Question 8
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('Yes')); // Question 9
    fireEvent.click(screen.getByText('Next'));

    fireEvent.click(screen.getByText('Yes')); // Question 10
    fireEvent.click(screen.getByText('Next'));

    // Verify outcome text
    expect(
      screen.getByText(
        'Your symptom description indicates that you are in need of URGENT medical care. Go directly to the nearest emergency room. If you are unable to do so, call an ambulance.',
      ),
    ).toBeInTheDocument();
    expect(screen.queryByDisplayValue('Book a meeting')).not.toBeInTheDocument();
  });
});
