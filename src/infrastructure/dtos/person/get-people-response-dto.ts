import { ResponseDto } from "../response-dto";
import { PersonDto } from "./person-dto";

export type GetPeopleResponseDto = ResponseDto<PersonDto[]>;
