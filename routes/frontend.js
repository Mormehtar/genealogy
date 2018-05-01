const path = require('path');
const fs = require('fs');
const Promise = require('bluebird');
const Router = require('koa-router');
const serve = require('koa-static');

const readFileThunk = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
};

const router = new Router();

router.get('*', serve(path.join(__dirname, '..', 'static')));
router.use(async (ctx) => {
  ctx.body = await readFileThunk(path.join(__dirname, '..', 'static', 'html', 'index.html'));
});

module.exports = router;
