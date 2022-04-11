import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1649718614476 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment',
                        isGenerated: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'lastName',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '255',
                        isPrimary: true
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'isAdmin',
                        default: false,
                        type: 'boolean',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }
}
