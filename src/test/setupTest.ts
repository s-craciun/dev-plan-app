import '@testing-library/jest-dom';

// unfortunately, I was not able to find any way to mock whatever svg I have in the assets
// the ../assets/*.svg pattern does not work
vi.mock('../assets/vite.svg', () => ({
  default: 'svg',
}));

vi.mock('../assets/react.svg', () => ({
  default: 'svg',
}));
