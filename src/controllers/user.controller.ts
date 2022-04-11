import { Request, Response, NextFunction } from "express"
import { UserEntity } from "../entities/user.entity";
import { UserService } from "../services/user.service";

export class UserController {
    private userService: UserService = new UserService();

    constructor() {}

    async getAll(request: Request, response: Response) : Promise<any> {

        const users = await this.userService.getAll();
        return users;
    }

    async create(request: Request, response: Response) {
        const userCreated = await this.userService.create(request.body);
        return userCreated;
    }

}