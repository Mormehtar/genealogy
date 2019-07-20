const migrate = require('../server/utils/migrate');

const environment = 'dev';
const command = process.argv[2];
const parameter = process.argv[3];

migrate(environment, command, parameter);
