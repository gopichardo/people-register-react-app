import { Person } from "../../../domain/models/Person";
import { RegisterPersonInputDto } from "../../dtos/person/register-person-input-dto";

export interface IRegisterPersonService {
  register(person: RegisterPersonInputDto): Promise<Person[]>;
}
