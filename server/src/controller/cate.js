const router = require('koa-router')()
// 引入user models
const Person = require('../model/cate')


router.prefix('/cate')


// 增
router.post('/add', async (ctx) => {
  console.log(ctx.request.body, '9299');
  const person = new Person({
    name: ctx.request.body.name,
    shortName: ctx.request.body.shortName,
  });
  let code;
  try {
    await person.save();
    code = 0;
  } catch (e) {
    code = -1;
  }
  ctx.body = {
    code: code
  };
});
// 查
router.post('/article-list', async function(ctx) {
  // const result = await Person.findOne({name: ctx.request.body.name})
  const results = await Person.find({name: ctx.request.body.name})
  ctx.body = {
    code: 0,
    // result,
    results
  }
})
module.exports = router;
