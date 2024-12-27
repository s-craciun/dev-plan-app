import type { JestConfigWithTsJest } from 'ts-jest';
import { defaults } from 'ts-jest/presets';

const config: JestConfigWithTsJest = {
  ...defaults,
  testEnvironment: 'jsdom',
  rootDir: 'src',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/config/jest/fileMock.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/config/jest/styleMock.ts',
  },
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

export default config;
