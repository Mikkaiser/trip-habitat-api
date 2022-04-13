import { getRepository, Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";


export class UserService {
    public userRepository : Repository<UserEntity>;

    constructor() {
        this.userRepository = getRepository(UserEntity)
    }

    async getAll() {
        const result = await this.userRepository.find();
        
        return result;
    }

    async create(user: UserEntity) {
        return await this.userRepository.save(user);
    }
}