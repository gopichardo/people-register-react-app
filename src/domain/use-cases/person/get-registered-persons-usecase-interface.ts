import { Person } from "../../models/Person";

export interface IGetRegisteredPersonsUseCase {
  getList(): Promise<Person[]>;
}
