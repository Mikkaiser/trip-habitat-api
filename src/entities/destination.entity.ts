import { IsNotEmpty, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('destination')
export class DestinationEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty({message: 'The destination should contains a name'})
    @IsString({ message: 'Name must be a string' })
    name: string;

    @Column()
    description: string;

    @Column()
    imagePath: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

}
