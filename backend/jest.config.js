module.exports = {
  verbose: true,
  rootDir: './',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    __DEV__: true,
    TZ: 'UTC',
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  testRegex: ['.*.test.ts$'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
};
