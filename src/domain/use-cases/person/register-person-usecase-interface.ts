import { RegisterPersonInputDto } from "../../../infrastructure/dtos/person/register-person-input-dto";
import { Person } from "../../models/Person";

export interface IRegisterPersonUseCase {
  register(person: RegisterPersonInputDto): Promise<Person>;
}
