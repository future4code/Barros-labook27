import { UserDatabase } from "../data/UserDatabase";
import { user } from "../model/user";
import { UserInputDTO } from "../model/UserDTO";
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
}