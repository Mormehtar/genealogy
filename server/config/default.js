module.exports = {
  bcrypt: {
    saltRounds: 10
  },
  neo4j: {
    user: process.env["NEO4J_USER"] || "neo4j",
    uri: process.env["NEO4J_URI"] || "bolt://neo4j",
    password: process.env["NEO4J_PASSWORD"]
  }
};
