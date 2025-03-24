import { render } from '@testing-library/react';
import App from './App.tsx';

describe('App', () => {
  it('should work as expected', () => {
    const { container } = render(<App />);
    const appContent = container.firstChild;
    expect(appContent).toBeInTheDocument();
  });
});
