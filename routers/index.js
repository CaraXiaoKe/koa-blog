const Router = require('koa-router');

let home = new Router();
home.get('/', async ( ctx )=>{
	let title = 'hello koa2'
	let posts = [
		{
			author:'dpd',
			title:"鱼香|我的读书教程",
			content:'当初读东野圭吾的《解忧杂货铺》，读完一遍，感觉到的迷糊不是一星半点，书里的这些人物怎么就交集在一起了呢，这时间怎么一会前一会后呢，这一切到底是怎么发生的啊！ 于是，不间断有了...',
		},
		{
			author:'dpd',
			title:"鱼香|我的读书教程",
			content:'当初读东野圭吾的《解忧杂货铺》，读完一遍，感觉到的迷糊不是一星半点，书里的这些人物怎么就交集在一起了呢，这时间怎么一会前一会后呢，这一切到底是怎么发生的啊！ 于是，不间断有了...',
		},
		{
			author:'dpd',
			title:"鱼香|我的读书教程",
			content:'当初读东野圭吾的《解忧杂货铺》，读完一遍，感觉到的迷糊不是一星半点，书里的这些人物怎么就交集在一起了呢，这时间怎么一会前一会后呢，这一切到底是怎么发生的啊！ 于是，不间断有了...',
		},
		{
			author:'dpd',
			title:"鱼香|我的读书教程",
			content:'当初读东野圭吾的《解忧杂货铺》，读完一遍，感觉到的迷糊不是一星半点，书里的这些人物怎么就交集在一起了呢，这时间怎么一会前一会后呢，这一切到底是怎么发生的啊！ 于是，不间断有了...',
		}
	]
  	await ctx.render('index', {
    	title,
    	posts
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