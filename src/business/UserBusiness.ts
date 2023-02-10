import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidBody, InvalidEmail, InvalidFriendship, InvalidPassword } from "../error/CustomError";
import { endFriendship, friendship, user } from "../model/user";
import { IdFriendshipInputDTO, UserInputDTO } from "../model/UserDTO";
import { generateId } from "../services/IdGenerator";

export class UserBusiness {
    public createUser = async (input: UserInputDTO) => {
        try {
            const userDatabase = new UserDatabase()
            const { name, email, password } = input
            
            if (!name || !email || !password){
                throw new InvalidBody()
            }

            if(!email.includes("@")){
                throw new InvalidEmail()
            }

            if(password.length < 8){
                throw new InvalidPassword()
            }

            const id: string = generateId()

            const user: user = {
                id,
                name,
                email,
                password
            }

            await userDatabase.createUser(user)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    public makeFriendship = async (input: IdFriendshipInputDTO) => {
        try {
            const userDatabase = new UserDatabase()
            const { idUser, idFriend } = input

            if(!idUser || !idFriend){
                throw new InvalidBody()
            }

            const id: string = generateId()

            const friendship: friendship = {
                id,
                idUser,
                idFriend
            }

            await userDatabase.makeFriendship(friendship)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    public endFrienship = async (input: IdFriendshipInputDTO) => {
        try {
            const { idUser, idFriend } = input

            if(!idUser || !idFriend){
                throw new InvalidBody()
            }

            const endFriendship: endFriendship = {
                idUser,
                idFriend
            }

            const userDatabase = new UserDatabase()
            const friend = await userDatabase.findUser(idUser, idFriend)
            
            if (idFriend !== friend) {
                throw new InvalidFriendship()
            }

            await userDatabase.endFrienship(endFriendship)


        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)

        }
    }
}