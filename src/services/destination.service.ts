import { isRFC3339, validate, ValidationError } from "class-validator";
import { getRepository, Repository } from "typeorm";
import { CreateDestinationDto } from "../dtos/destination/create-destination.dto";
import { UpdateDestinationDto } from "../dtos/destination/update-destination";
import { DestinationEntity } from "../entities/destination.entity";
import { ErrorResponse } from "../utils/validation-models/error-response.dto";
import { formatErrorValidation, validatorDto } from "../utils/validation-utils";

export class DestinationService {
    public destinationRepository : Repository<DestinationEntity>;

    constructor() {
        this.destinationRepository = getRepository(DestinationEntity);
    }

    async getAll() : Promise<DestinationEntity[]> {
        const destinations = await this.destinationRepository.find();

        return destinations;
    }

    async getOne(id: number) : Promise<DestinationEntity | ErrorResponse> {
        const destination = await this.destinationRepository.findOne({ id });

        if(destination == undefined) {
            return new ErrorResponse('This destination does not exists');
        }

        return destination;
    }

    async create(destination: CreateDestinationDto) : Promise<DestinationEntity | ErrorResponse> {
        
        const destinationCreated = this.destinationRepository.create(destination);

        const errors = await validatorDto(CreateDestinationDto, destination);
        
        if(errors == null){
            return await this.destinationRepository.save(destinationCreated);
        }
        else {
            const errorsFormated = await formatErrorValidation(errors);
            return errorsFormated;
        }
    }

    async update(id: number, destination: UpdateDestinationDto) : Promise<DestinationEntity | ErrorResponse> {

        
        //Verify Entity DTO
        const errors = await validatorDto(UpdateDestinationDto, destination);

        if(errors != null) {
            const errorsFormated = await formatErrorValidation(errors);
            return errorsFormated;
        }


        //Verify if item exists

        const destinationFound = await this.getOne(id);

        if(destinationFound instanceof ErrorResponse) {
            return new ErrorResponse('Destination not found. Is not possible to update');
        }

        //Update item
        const { name, description, imagePath } = destination;

        destinationFound.name = name; 
        destinationFound.description = description; 
        destinationFound.imagePath = imagePath; 

        return await this.destinationRepository.save(destinationFound);
    }

    async delete(id: number) : Promise<Object | ErrorResponse> {

        const destinationFound = await this.getOne(id);

        if(destinationFound instanceof ErrorResponse) {
            return new ErrorResponse('This destination does not exists');
        }

        await this.destinationRepository.delete(id);

        return { message: 'Deleted successfully' };

    }
}