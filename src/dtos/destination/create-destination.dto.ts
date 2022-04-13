import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateDestinationDto {

        @IsNotEmpty({message: 'The destination should contains a name'})
        @IsString({ message: 'Name must be a string' })
        readonly name : string;
        
        @IsNotEmpty({message: 'The destination should contains a description'})
        @IsString({ message: 'Description must be a string' })
        readonly description : string;

        @IsNotEmpty({message: 'The destination should contains an image'})
        readonly imagePath : string;
}