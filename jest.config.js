const { defaults } = require('jest-config');
const config = require('@engineforce/build-config/jest.config');

module.exports = {
  ...config,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  verbose: true,
  testMatch: [...defaults.testMatch, '**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  collectCoverageFrom: ['src/**'],
};
