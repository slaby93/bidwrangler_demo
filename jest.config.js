
module.exports = {
  modulePaths: [
    './src/',
  ],
  collectCoverageFrom: [
    'src/**/*[^index].{js,jsx}',
  ],
  setupFiles: [
    'raf/polyfill',
    './jestSetup.js',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupTestFrameworkScriptFile: '<rootDir>/jest.setupFramework.js',
};
