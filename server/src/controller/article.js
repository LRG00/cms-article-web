const router = require('koa-router')()
// 引入user models
const Person = require('../model/article')


router.prefix('/api')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 增
router.post('/add', async (ctx) => {
  console.log(ctx.request.body, '9299');
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
