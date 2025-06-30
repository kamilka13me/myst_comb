export default {
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],

  transform: {
    "^.+\\.js$": "babel-jest",
  },
  testEnvironment: "node",
};
