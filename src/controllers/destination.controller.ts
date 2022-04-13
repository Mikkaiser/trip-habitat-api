import { DestinationEntity } from "../entities/destination.entity";
import { DestinationService } from "../services/destination.service";
import { Request } from 'express';
import { Response } from 'express'
import { ValidationError } from "class-validator";
import { ErrorResponse } from "../utils/validation-models/error-response.dto";

export class DestinationController {
    public destinationService: DestinationService;

    constructor() {
        this.destinationService = new DestinationService();
    }

    async getAll() : Promise<DestinationEntity[]>{
        return this.destinationService.getAll();
    }

    async getOne(request: Request, response: Response) : Promise<DestinationEntity | ErrorResponse>{
        return this.destinationService.getOne(+request.params.id);
    }

    async create(request: Request, response: Response) : Promise<DestinationEntity | ErrorResponse> {
        const res = await this.destinationService.create(request.body);
        return res;
    }


    async update(request: Request, response: Response) : Promise<DestinationEntity | ErrorResponse> {
        const res = await this.destinationService.update(+request.params.id, request.body);
        return res;
    }

    async delete(request: Request, response: Response) : Promise<Object | ErrorResponse> {
        return await this.destinationService.delete(+request.params.id);
    }
}
