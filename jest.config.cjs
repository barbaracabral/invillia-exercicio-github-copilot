module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/src/static/**/__tests__/**/*.test.[jt]s?(x)', '**/src/static/**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
