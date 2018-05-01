const Router = require('koa-router');
const body = require('koa-json-body');

const router = new Router();

router.use(body());

module.exports = router;
