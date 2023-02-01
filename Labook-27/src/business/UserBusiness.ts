import { UserDatabase } from "../data/UserDatabase";
import { friendship, user } from "../model/user";
import { IdFriendshipInputDTO, UserInputDTO } from "../model/UserDTO";
import { generateId } from "../services/IdGenerator";

export class UserBusiness{
    public createUser = async( input: UserInputDTO)=>{
        try{
            const userDatabase = new UserDatabase()
            const {name, email, password} = input

            const id: string = generateId()

            const user: user = {
                id,
                name,
                email,
                password
            }

            await userDatabase.createUser(user)
            
        }catch(error:any){
            throw new Error(error.message)
        }
    }

    public makeFriendship = async (input: IdFriendshipInputDTO)=>{
        try{
            const userDatabase = new UserDatabase()
            const { idUser, idFriend } = input

            const id: string = generateId()

            const friendship: friendship = {
                id,
                idUser,
                idFriend
            }

            await userDatabase.makeFriendship(friendship)

        }catch(error:any){
            throw new Error(error.message)
        }
    }
}