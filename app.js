const Koa = require('koa');
const app = new Koa();
const setting = require('./config/setting.js');
const router = require('./routers/index.js');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const static = require('koa-static');

const PORT = process.env.PORT||setting.PORT||3000;

app.use(static(
  	path.join( __dirname,  './public')
));
app.use(bodyParser());
app.use(async ( ctx, next ) => {

	next()
});
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT,()=>{
	console.log(`listening on port ${PORT}`);
});
