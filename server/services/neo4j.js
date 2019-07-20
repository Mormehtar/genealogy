const neo4j = require('neo4j-driver').v1;

module.exports = (app) => {
  let {uri, user, password} = app.context.config.neo4j;

  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

  process.on('beforeExit', () => {driver.close();});

  return driver;
};
