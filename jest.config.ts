import type { Config } from "jest";

const config: Config = {
  verbose: true,
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  testEnvironment: "jsdom",
};

export default config;
