const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken')
const jwt_secret = 'ponyzeng'
const url = 'mongodb://ponyzeng:zty10086@175.24.180.103:27017'; 



class UserController{
    async register(ctx,next){
        ctx.body = 'user_registery'
    }
    //用户登录的业务逻辑
    
      async login(ctx,next){
        const client = new MongoClient(url)
            try{
                await client.connect()
                const db = client.db('changfar')
                const users = db.collection('users')
                const options = {
                  projection:{
                    name:1,
                    pwd:1,
                    phone:1,
                    _id:0
                  }
                }
                const result = await users.findOne({
                  phone:ctx.request.body.phone
                },options)
                if(!result){
                    ctx.body = {
                      text:"找不到用户",
                      status:203
                    }
                    return
                }else if(result.pwd!=ctx.request.body.pwd){
                  ctx.body = {
                    text:"密码输入错误",
                    status:204
                  }
                  return
                }else{
                  ctx.body = {
                    text:"登录成功",
                    status:200,
                    name:result.name,
                    phone:result.phone,
                    token:jwt.sign(result,jwt_secret)
                  }
                  return
                }

            }   catch(e){
                console.error(e)
            }   finally{
                await client.close()
            }
       }
     
    
            }
           
         
        



module.exports  = new UserController()