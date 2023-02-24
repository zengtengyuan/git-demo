const { MongoClient } = require('mongodb');
const url = 'mongodb://ponyzeng:zty10086@175.24.180.103:27017'; 
const jwt = require('jsonwebtoken')
const jwt_secret = 'ponyzeng'
const ObjectId = require('mongodb').ObjectId

class IdeasController{
    
    //look all ideas
      async lookAll(ctx,next){
        const client = new MongoClient(url)
            try{
                await client.connect()
                const db = client.db('changfar')
                const ideas = db.collection('ideas')
                const options = {
                    sort:{
                        timeStamp:-1
                    }
                }
                const result = await ideas.find({},options).toArray()
                return ctx.body={
                    data:result
                }
            }   catch(e){
                console.error(e)
            }   finally{
                await client.close()
            }
       }
       //put ideas
       async put(ctx,next){
        const client = new MongoClient(url)
        try{
            //charge token is right?
            const token = ctx.request.body.token
            const res =  jwt.verify(token,jwt_secret)
            await client.connect()
            const db = client.db('changfar')
            const ideas = db.collection('ideas')
            const doc = {
                content: ctx.request.body.content,
                name: res.name,
                time:ctx.request.body.time,
                timeStamp:ctx.request.body.timeStamp,
                likes:[],
                comments:[]
              }
            const insert_result = await ideas.insertOne(doc)
            if(insert_result.insertedId){
                return ctx.body = {
                    code:200,
                    text:'发表动态成功'
                }
            }else{
                return ctx.body = {
                    code:200,
                    text:'发表动态失败，请稍后再试'
                }
            }
        }   catch(e){
            if(e.name=='JsonWebTokenError'){
                return ctx.body = {
                    code:404,
                    text:"您当前登录环境异常，请刷新重试"
                }
            }
        }   finally{
            await client.close()
        }
       }
     // 点赞动态
     async like(ctx,next){
        const client = new MongoClient(url)
        try{
            //charge token is right?
            const token = ctx.request.body.token
            const res =  jwt.verify(token,jwt_secret)
            await client.connect()
            const db = client.db('changfar')
            const ideas = db.collection('ideas')
            const filter = {_id:ObjectId(ctx.request.body._id)}
            const updateDoc = {
                $addToSet: {
                  likes: ctx.request.body.phone
                },
              };
              const result = await ideas.updateOne(filter, updateDoc);
              if(result.modifiedCount){
                return ctx.body = {
                    code:200,
                    text:'点赞成功'
                }
              }else{
                return ctx.body = {
                    code:202,
                    text:'您已经点赞过'
                }
              }
        }   catch(e){
            if(e.name=='JsonWebTokenError'){
                return ctx.body = {
                    code:404,
                    text:"您当前登录环境异常，请刷新重试"
                }
            }
        }   finally{
            await client.close()
        }
       }
    
            }
           
         
        



module.exports  = new IdeasController()