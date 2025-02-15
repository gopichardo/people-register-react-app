import { inject, injectable } from "inversify";
import { Person } from "../../models/Person";
import { IGetRegisteredPersonsUseCase } from "./get-registered-persons-usecase-interface";
import type { IPersonApiRepository } from "../../../infrastructure/repository/person-api-repository-interface";
import { TYPES } from "../../../infrastructure/container-types";

@injectable()
export class GetRegisteredPersonsUseCase
  implements IGetRegisteredPersonsUseCase
{
  constructor(
    @inject(TYPES.IPersonApiRepository)
    private readonly IPersonApiRepository: IPersonApiRepository
  ) {}

  async getList(): Promise<Person[]> {
    try {
      const people = await this.IPersonApiRepository.getRegisteredPeople();

      const response: Person[] = people.map((personDto) => {
        const person: Person = {
          Id: personDto.id,
          Name: personDto.name,
          Phone: personDto.phone,
          Email: personDto.email,
          Company: {
            Name: personDto?.company?.name,
          },
        };

        return person;
      });

      return response;
    } catch (error) {
      console.error("Use case Error: ", error);
      return [];
    }
  }
}
