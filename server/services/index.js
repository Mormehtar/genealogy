const neo4j = require('./neo4j');
const redis = require('./redis');

module.exports = (app) => {
  app.context.services = {
    neo4j: neo4j(app),
    redis: redis(app)
  };
};