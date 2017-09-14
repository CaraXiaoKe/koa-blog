const Router = require('koa-router');

let home = new Router();
home.get('/', async ( ctx )=>{
	let title = 'hello koa2'
  	await ctx.render('index', {
    	title,
  	})
});

let page = new Router();
page.get('/404', async ( ctx )=>{

  	ctx.body = '404 page!'
}).get('/helloworld', async ( ctx )=>{

  	ctx.body = 'helloworld page!'
});


// 装载所有子路由
let router = new Router();
router.use('/', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());
module.exports = router;