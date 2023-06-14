import { Request, Response } from "express";
import UserService from "./user.service";

class UserController{
    public async create(req: Request, res: Response) {
        const createdUser = await UserService.create(req.body)
        return res.status(201).json(createdUser)
    }

    public async createMany(req: Request, res: Response) {
        const createdUsers = await UserService.createMany(req.body)
        return res.status(201).json(createdUsers)
    }

    public async findMale(req: Request, res: Response) {
        const maleUsers = await UserService.findMale()
        return res.status(200).json(maleUsers)
    }

    public async findByName(req: Request, res: Response){
        const user = await UserService.findByName(req.params.name)
        return res.status(200).json(user)
    }

    public async avgWeight(req: Request, res: Response){
        const avgWeight = await UserService.avgWeight()
        return res.status(200).json(avgWeight)
    }

    public async findUnicesumar(req: Request, res: Response) {
        const unicesumarUsers = await UserService.findUnicesumar()
        return res.status(200).json(unicesumarUsers)
    }

    public async updateUser(req: Request, res: Response) {
        const updateUser = await UserService.update(req.params.id, req.body)
        return res.status(200).json(updateUser)
    }

    public async deleteUser(req: Request, res: Response) {
        const updateUser = await UserService.delete(req.params.id)
        return res.status(200).json("Usuário deletado com sucesso");
    }
}

export default new UserController()