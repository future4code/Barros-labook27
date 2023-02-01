import { friendship, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private userTable = "labook_users"
    private friendTable = "labook_friend"

    public createUser = async (user: user) => {
        try {
            UserDatabase.connection.initialize()
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into(this.userTable)

        } catch (error: any) {
            throw new Error(error.message)

        } finally {
            console.log("Conexão encerrada!")
            UserDatabase.connection.destroy()
        }
    }

    public makeFriendship = async (friendship:friendship) =>{
        try{
            UserDatabase.connection.initialize()
            await UserDatabase.connection.insert({
                id: friendship.id,
                id_user: friendship.idUser,
                id_friend: friendship.idFriend
            }).into(this.friendTable)

        }catch(error:any){
            throw new Error(error.message)
        }finally {
            console.log("Conexão encerrada!")
            UserDatabase.connection.destroy()
        }
    }

}