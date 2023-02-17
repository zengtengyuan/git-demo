const { MongoClient } = require('mongodb');
const url = 'mongodb://ponyzeng:zty10086@175.24.180.103:27017'; 



class UserController{
    
    //look all ideas
      async lookAll(ctx,next){
        const client = new MongoClient(url)
            try{
                await client.connect()
                const db = client.db('changfar')
                const ideas = db.collection('ideas')
                const result = await ideas.find({}).toArray()
                return ctx.body={
                    data:result
                }
            }   catch(e){
                console.error(e)
            }   finally{
                await client.close()
            }
       }
     
    
            }
           
         
        



module.exports  = new UserController()