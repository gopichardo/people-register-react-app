import { inject, injectable } from "inversify";
import { IGetPersonService } from "./get-person-service-interface";
import type { IGetRegisteredPersonsUseCase } from "../../../domain/use-cases/person/get-registered-persons-usecase-interface";
import { Person } from "../../../domain/models/Person";
import { TYPES } from "../../container-types";

@injectable()
export class GetPersonService implements IGetPersonService {
  constructor(
    @inject(TYPES.IGetRegisteredPersonsUseCase)
    private readonly getRegisteredPeopleUseCase: IGetRegisteredPersonsUseCase
  ) {}
  getAll(): Promise<Person[]> {
    return this.getRegisteredPeopleUseCase.getList();
  }
}
