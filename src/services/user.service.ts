import { getRepository } from "typeorm";
import { UserEntity } from "../entities/user.entity";


export class UserService {
    public userRepository;

    constructor() {
        this.userRepository = getRepository(UserEntity)
    }

    async getAll() {
        const result = await this.userRepository.find();
        
        return result;
    }

    async getOne(id: number) {
        return await this.userRepository.findOneBy({ id });
    }

    async create(user: UserEntity) {
        return await this.userRepository.save(user);
    }

    async delete(id: number) {
        let userToRemove = await this.userRepository.findOneBy({ id });
        await this.userRepository.remove(userToRemove);
    }
}