const router = require('koa-router')();
const jwt = require('jsonwebtoken');
const userModel = require('../model/users');

router.prefix('/api');

router.post('/login1', async (ctx) => {
	const data = ctx.request.body;
	if(!data.username || !data.passwd){
		return ctx.body = {
			code: '000002',
			data: null,
			msg: '参数不合法'
		}
	}
	const result = await userModel.findOne({
		username: data.username,
		passwd: data.passwd
	})
	if(result !== null){
		const token = jwt.sign({
			username: result.username,
			_id: result._id
		}, 'my_token', { expiresIn: '2h' });
		return ctx.body = {
			code: '000001',
			data: token,
			msg: '登录成功'
		}
	}else{
		return ctx.body = {
			code: '000002',
			data: null,
			msg: '用户名或密码错误'
		}
	}
});

module.exports = router;