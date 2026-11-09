import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('redirects / to the registration page inside the layout', async () => {
    window.history.pushState({}, '', '/');
    render(<App />);

    expect(
      await screen.findByRole('heading', { name: 'Company Registration' })
    ).toBeTruthy();
    expect(window.location.pathname).toBe('/registration');
    // Not registered yet, so the nav shows Feedback rather than Grievances.
    expect(screen.getByRole('link', { name: 'Feedback' })).toBeTruthy();
    expect(screen.queryByRole('link', { name: 'Grievances' })).toBeNull();
  });
});
