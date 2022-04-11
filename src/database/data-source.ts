import "reflect-metadata"
import { DatabaseType, DataSource, DataSourceOptions } from "typeorm";

export const AppDataSource = new DataSource({
    type: `${process.env.DB_TYPE}` as any,
    host: `${process.env.DB_HOST}`,
    port: Number(process.env.DB_PORT),
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`,
    synchronize: Boolean(process.env.DB_SYNCHRONIZE),
    logging: Boolean(process.env.DB_LOGGING),
    entities: [`${process.env.ENTITIES_DIR}`],
    migrations: [`${process.env.MIGRATIONS_DIR}`],
});
