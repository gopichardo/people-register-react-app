import { inject, injectable } from "inversify";
import { GetPeopleResponseDto } from "../dtos/person/get-people-response-dto";
import { RegisterPersonResponseDto } from "../dtos/person/register-person-response-dto";
import { IPersonApiRepository } from "./person-api-repository-interface";
import type { IHttpRepository } from "./http/http-repository-interface";
import { RegisterPersonInputDto } from "../dtos/person/register-person-input-dto";
import { TYPES } from "../container-types";

@injectable()
export class PersonApiRepository implements IPersonApiRepository {
  constructor(
    @inject(TYPES.IHttpClient) private readonly httpClient: IHttpRepository
  ) {}
  getRegisteredPeople(): Promise<GetPeopleResponseDto> {
    return this.httpClient.getAll();
  }

  registerPerson(
    person: RegisterPersonInputDto
  ): Promise<RegisterPersonResponseDto> {
    return this.httpClient.post(person);
  }
}
