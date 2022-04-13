import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateExamsTable1649889723061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'exams',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'description',
                        type: 'text'
                    },
                    {
                        name: 'destinationId',
                        type: 'int',
                    },
                    {
                        name: 'userId',
                        type: 'int',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_exams_destination',
                        columnNames: ['destinationId'],
                        referencedTableName: 'destination',
                        referencedColumnNames: ['id'],
                    },
                    {
                        name: 'fk_exams_user',
                        columnNames: ['userId'],
                        referencedTableName: 'user',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('exams');
    }

}
