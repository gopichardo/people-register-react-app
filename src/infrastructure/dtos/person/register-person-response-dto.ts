import { ResponseDto } from "../response-dto";
import { RegisterPersonInvalidResponseDto } from "../validations/register-person-invalid-response-dto";
import { RegisterPersonInputDto } from "./register-person-input-dto";

export type RegisterPersonResponseDto = ResponseDto<
  RegisterPersonInputDto,
  RegisterPersonInvalidResponseDto
>;
