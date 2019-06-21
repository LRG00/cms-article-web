const Koa = require("koa");
const Router = require("koa-router");
const koajwt = require("koa-jwt");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const helmet = require("koa-helmet");
const respond = require("koa-respond");
const logger = require("koa-logger");
const serve = require("koa-static");
const path = require("path");

const api = require("./routes/api");
const login = require("./routes/login");

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3001;

require("./router")(router);
// 错误处理
app.use((ctx, next) => {
  return next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = "Protected resource, use Authorization header to get access\n";
    } else {
      throw err;
    }
  });
});

app.use(
  koajwt({
    secret: "my_token"
  }).unless({
    path: [/login/]
  })
);

app
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(helmet())
  .use(respond())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(login.routes(), login.allowedMethods())
  .use(api.routes(), api.allowedMethods())
  .use(serve(path.join(process.cwd(), "../client/build")))
  .listen(port, () => {
    console.log("The server is running at:");
    console.log(`    - Local:  http://localhost:${port}`);
  });
