import { PostDatabase } from "../data/PostDatabase";
import { post } from "../model/post";
import { PostInputDTO } from "../model/PostDTO";
import { generateId } from "../services/IdGenerator";
import { orderBy } from "../services/OrderBy";

export class PostBusiness {
    public createPost = async (input: PostInputDTO) => {
        try {
            const postDatabase = new PostDatabase()
            const { photo, description, type, createdAt, authorId } = input

            const id: string = generateId()

            const post:post={
                id,
                photo,
                description,
                type,
                createdAt,
                authorId
            }

            await postDatabase.createPost(post)

        } catch (error: any) {
            throw new Error(error.message)

        }
    }
    public getPostId = async(id:string)=>{
        try{
            
            const postDatabase = new PostDatabase()
            return await postDatabase.getPostId(id)

        }catch(error:any){
            throw new Error(error.message)
        }
    }

    public seeFeed = async () =>{
        try{

            const postDatabase = new PostDatabase()
            return await postDatabase.seeFeed()

        }catch(error:any){
            throw new Error(error.message)
        }
    }
    
}