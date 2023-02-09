import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IdFriendshipInputDTO, UserInputDTO } from "../model/UserDTO";

export class UserController {
    public createUser = async (req: Request, res: Response) => {
        try {
            const input: UserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send({ message: "Usuário criado!" })

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public makeFriendship = async (req: Request, res: Response) => {
        try {
            const input: IdFriendshipInputDTO = {
                idUser: req.body.idUser,
                idFriend: req.body.idFriend
            }
            const userBusiness = new UserBusiness()
            await userBusiness.makeFriendship(input)

            res.status(201).send({ message: "Amizade criada!" })

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public endFrienship = async (req: Request, res: Response) => {
        try {
            const input: IdFriendshipInputDTO = {
                idUser: req.body.idUser,
                idFriend: req.body.idFriend
            }
            const userBusiness = new UserBusiness()
            await userBusiness.endFrienship(input)

            res.status(201).send({ message: "Amizade acabou :/"})


        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}