const Router = require('koa-router')
const {lookAll,put,like} = require('../controller/ideas.js')
//使用/users前缀



const router = new Router({prefix:'/ideas'})

//look all ideas
router.get('/lookAll',lookAll)
router.post('/put',put)
router.post('/like',like)
module.exports = router