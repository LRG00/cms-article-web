const router = require('koa-router')()
// 引入user models
const Person = require('../model/article')


router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 增
router.post('/add', async (ctx) => {
  const person = new Person({
    title: ctx.request.body.title,
    author: ctx.request.body.author,
    body: ctx.request.body.body,
    desc: ctx.request.body.desc,
    cats: ctx.request.body.cats,
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
router.post('/article-list', async (ctx) => {
  console.log(ctx.request.body, '9299');
  const title = await Person.findOne({ title: ctx.request.body.title });
  ctx.body = {
    code: 0,
    title,
  }
})
module.exports = router;
