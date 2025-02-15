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
  async register(person: RegisterPersonInputDto): Promise<Person> {
    try {
      const responseDto = await this.personApiRepository.registerPerson(person);

      const registeredPerson: Person = {
        Id: responseDto.data?.id ?? "",
        Name: responseDto.data?.name ?? "",
        Phone: responseDto.data?.phone ?? "",
        Email: responseDto.data?.email ?? "",
        Company: {
          Name: responseDto.data?.company?.name ?? "",
        },
      };

      return registeredPerson;
    } catch (error) {
      console.error("Register person use case error :", error);
      throw new Error("Error sregistering person");
    }
  }
}
