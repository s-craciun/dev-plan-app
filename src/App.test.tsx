import { render } from '@testing-library/react';
import App from './App.tsx';
import '@testing-library/jest-dom';

describe('App', () => {
  it('should work as expected', () => {
    const { container } = render(<App />);
    const appContent = container.firstChild;

    expect(appContent).toBeInTheDocument();
  });
});
