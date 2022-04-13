import { ClassConstructor, plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { ErrorResponse } from "./validation-models/error-response.dto";

/**
 * 
 * Validate the payload will be sending or receiving, make sure the data is suitable
 * 
 * @param dto The DTO object to validate
 * @param obj The object recieved from response body
 * 
 * @example
 * ```ts
 *  await validatorDto(EmployeeDTO, response.data.employee);
 * 
 * ```
 */
export const validatorDto = async <T extends ClassConstructor<any>>(
  dto: T,
  obj: Object
) => {
  // tranform the literal object to class object
  const objInstance = plainToClass(dto, obj);
  // validating and check the errors, throw the errors if exist
  const errors = await validate(objInstance);
  // errors is an array of validation errors
  if (errors.length > 0) {
    //Get only the error messages from string
    // const errorMessages = errors.map(err => Object.values(err.constraints)[0]);

    return errors;
  }
  else {
    //Indicating that no errors exist here
    return null;
  }
};

export const formatErrorValidation = async (errors: ValidationError[]) : Promise<ErrorResponse> => {
  
  const messages = errors.map(err => Object.values(err.constraints)[0]);
  
  const error : ErrorResponse = {
    validatorMessages: messages,
    status: 400,
    exceptionMessage: 'Bad Request'
  }

  return error;
}