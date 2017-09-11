const Router = require('koa-router');

let home = new Router();
home.get('/', async ( ctx )=>{
	let html = `
		<ul>
	      	<li><a href="/page/helloworld">/page/helloworld1111</a></li>
	      	<li><a href="/page/404">/page/404</a></li>
	      	<img src="/images/single2.png"/>
	    </ul>
	`;
	ctx.body = html;
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