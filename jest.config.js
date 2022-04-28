module.exports = {
  preset: "@swc-node/jest",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
