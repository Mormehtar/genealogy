module.exports = {
  postgres: {
    driver: "pg",
    user: process.env["PG_USER"] || "postgres",
    password: process.env["PG_PASS"],
    host: process.env["PG_HOST"] || "localhost",
    database: process.env["PG_DB"] || "genealogy"
  },
  bcrypt: {
    saltRounds: 10
  }
};
