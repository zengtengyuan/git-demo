const Koa = require('koa')
const cors= require('koa2-cors')
const bodyParser = require('koa-bodyparser')
//创建一个实例app
const app = new Koa()

app.use(cors())
app.use(bodyParser())
const userRouter = require('../router/user.js')
const ideasRouter = require('../router/ideas.js')
//注意使用的中间件只能是函数
app.use(userRouter.routes())
app.use(ideasRouter.routes())
module.exports = app