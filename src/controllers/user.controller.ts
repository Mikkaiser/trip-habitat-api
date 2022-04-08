import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../database/data-source";
import { UserEntity } from "../entities/user.entity";
import { UserService } from "../services/user.service";

export class UserController {
    private userService: UserService = new UserService();

    constructor() {}

    async getAll(request: Request, response: Response) : Promise<any> {

        const users = await this.userService.getAll();

        console
        return users;
    }

    async getOne(request: Request, response: Response) {
        // return await this.userService.getOne(request.body.id);
    }

    async create(request: Request, response: Response) {
        const userCreated = await this.userService.create(request.body);
        return response.json(userCreated);
    }

    async delete(request: Request, response: Response) {
        // await this.userService.delete(request.body.id);
    }

}