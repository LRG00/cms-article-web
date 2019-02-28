const router = require('koa-router')()
// 引入user models
const Person = require('../model/users')


router.prefix('/users');

// 增
router.post('/add1', async (ctx) => {
  console.log(ctx.request.body, 'xxx');
  const person = new Person({
    username: ctx.request.body.username,
    displayName: ctx.request.body.displayName,
    email: ctx.request.body.email,
    userGroup: ctx.request.body.userGroup,
    passwd: ctx.request.body.passwd,
    rePasswd: ctx.request.body.rePasswd,
  });
  let code;
  try {
    await person.save();
    code = 0;
  } catch (e) {
    code = -1;
  }
  ctx.body = {
    code: code,
  };
});

module.exports = router;
