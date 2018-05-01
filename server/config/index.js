const defaultConfig = require('./default');

function tryEnv(env) {
  try {
    return require('./' + env);
  } catch (exception) {
    return {};
  }
}

const env = process.env["environment"] || "dev";

defaultConfig.env = env;

module.exports = {
  ...defaultConfig,
  ...tryEnv(env)
};
