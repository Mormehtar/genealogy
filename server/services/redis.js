const redis = require("redis");

module.exports = (app) => {
  return redis.createClient();
};