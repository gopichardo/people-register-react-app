import { PersonDto } from "./person-dto";
import { ResponseDto } from "../response-dto";

export type RegisterPersonResponseDto = ResponseDto<PersonDto[]>;
