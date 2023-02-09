import { PostDatabase } from "../data/PostDatabase";
import { CustomError, InvalidBody, InvalidDescription, InvalidId, InvaliType } from "../error/CustomError";
import { post, POST_TYPES } from "../model/post";
import { PostInputDTO } from "../model/PostDTO";
import { generateId } from "../services/IdGenerator";

export class PostBusiness {
    public createPost = async (input: PostInputDTO) => {
        try {
            const postDatabase = new PostDatabase()
            const { photo, description, type, createdAt, authorId } = input

            if (!photo || !description || !type || !createdAt || !authorId){
                throw new InvalidBody()
            }

            if(type !== POST_TYPES.EVENT && type !== POST_TYPES.NORMAL){
                throw new InvaliType()
            }

            if(description.length < 8){
                throw new InvalidDescription()
            }

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
            throw new CustomError(error.statusCode, error.message)

        }
    }
    public getPostId = async(id:string)=>{
        try{
            
            if(!id){
                throw new InvalidId()
            }
            const postDatabase = new PostDatabase()
            return await postDatabase.getPostId(id)

        }catch(error:any){
            throw new CustomError(error.statusCode, error.message)
        }
    }

    public seeFeed = async () =>{
        try{

            const postDatabase = new PostDatabase()
            return await postDatabase.seeFeed()

        }catch(error:any){
            throw new CustomError(error.statusCode, error.message)
        }
    }
    
}