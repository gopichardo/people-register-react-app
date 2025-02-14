import { inject, injectable } from "inversify";
import { RegisterPersonInputDto } from "../../../infrastructure/dtos/person/register-person-input-dto";
import { Person } from "../../models/Person";
import { IRegisterPersonUseCase } from "./register-person-usecase-interface";
import type { IPersonApiRepository } from "../../../infrastructure/repository/person-api-repository-interface";
import { TYPES } from "../../../infrastructure/container-types";

@injectable()
export class RegisterPersonUseCase implements IRegisterPersonUseCase {
  constructor(
    @inject(TYPES.IPersonApiRepository)
    private readonly personApiRepository: IPersonApiRepository
  ) {}
  async register(person: RegisterPersonInputDto): Promise<Person[]> {
    try {
      const { data } = await this.personApiRepository.registerPerson(person);

      const response: Person[] = data.map((personDto) => {
        const person: Person = {
          Name: personDto?.contactName,
          Phone: personDto?.phone,
          Email: personDto?.email,
          Company: {
            Name: personDto?.company?.name,
          },
        };

        return person;
      });

      return response;
    } catch (error) {
      console.error("Register person use case error :", error);
      return [];
    }
  }
}
