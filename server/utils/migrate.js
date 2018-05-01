const path = require("path");
const dbmigrate = require("db-migrate");
const config = require("../config");

module.exports = function (environment, command, argument) {
  process.env = environment;
  const migrator = dbmigrate.getInstance(true, {config: {dev: config.postgres}});
  migrator.internals.argv._ = [];
  migrator.internals.argv["migrations-dir"] = path.join(__dirname, "..", "migrations");
  return migrator[command](argument)
      .then(() => console.log("Finished!"))
      .catch(err => console.error("Error", err));
};
