import { GetPeopleResponseDto } from "../../dtos/person/get-people-response-dto";
import { RegisterPersonInputDto } from "../../dtos/person/register-person-input-dto";
import { RegisterPersonResponseDto } from "../../dtos/person/register-person-response-dto";

export interface IHttpClient {
  getAll(): Promise<GetPeopleResponseDto>;
  post(body: RegisterPersonInputDto): Promise<RegisterPersonResponseDto>;
}
