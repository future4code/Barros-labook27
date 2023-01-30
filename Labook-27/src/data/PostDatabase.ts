import { post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase{
    private postTable = "labook_posts"

    public createPost = async (post:post) =>{
        try{
            PostDatabase.connection.initialize()
            await PostDatabase.connection.insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.createdAt,
                author_id: post.authorId
            }).into(this.postTable)

        }catch(error:any){
            throw new Error(error.message)
        }finally{
            console.log("Conexão encerrada!")
            PostDatabase.connection.destroy()
        }
    }
}