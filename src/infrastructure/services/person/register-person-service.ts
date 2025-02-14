import { RegisterPersonInputDto } from "../../dtos/person/register-person-input-dto";
import { IRegisterPersonService } from "./register-person-service-interface";
import { inject, injectable } from "inversify";
import type { IRegisterPersonUseCase } from "../../../domain/use-cases/person/register-person-usecase-interface";
import { Person } from "../../../domain/models/Person";
import { TYPES } from "../../container-types";

@injectable()
export class RegisterPersonService implements IRegisterPersonService {
  constructor(
    @inject(TYPES.IRegisterPersonUseCase)
    private readonly registerPersonUseCase: IRegisterPersonUseCase
  ) {}

  register(person: RegisterPersonInputDto): Promise<Person[]> {
    return this.registerPersonUseCase.register(person);
  }
}
