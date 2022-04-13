export class ErrorResponse {

    validatorMessages: Array<string> = [];
    status: number = 400;
    exceptionMessage : string = 'Bad Request';

    constructor(exceptionMessage : string) {
        this.validatorMessages.push(exceptionMessage);
    }

}