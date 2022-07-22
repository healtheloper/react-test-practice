module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@presenters(.*)$': '<rootDir>/src/presenters$1',
  },
};
