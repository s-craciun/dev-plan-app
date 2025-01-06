/** @type {import('ts-jest').JestConfigWithTsJest} * */
export default {
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svg.tsx',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleFileExtensions: [
    'tsx',
    'ts',
    'web.js',
    'js',
    'web.ts',
    'web.tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/dist/'],
};
