import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: `postgres`,
    host: `${process.env.API_HOST}`,
    port:  Number(process.env.API_HOST),
    username: `${process.env.API_USERNAME}`,
    password: `${process.env.API_PASSWORD}`,
    database: `${process.env.DATABASE_NAME}`,
    synchronize: true,
    entities: [`${process.env.ENTITIES_DIR}`],
    migrations: [`${process.env.MIGRATIONS_DIR}`],
})
