const Router = require('koa-router')
const {register,login} = require('../controller/user.js')
//使用/users前缀



const router = new Router({prefix:'/users'})

//users=>register
router.get('/register',register)
// users=>login
router.post('/login', login)
module.exports = router