const Router = require('koa-router')
const {lookAll} = require('../controller/ideas.js')
//使用/users前缀



const router = new Router({prefix:'/ideas'})

//look all ideas
router.get('/lookAll',lookAll)
module.exports = router