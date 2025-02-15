import { Person } from "../../../domain/models/Person";

export interface IGetPersonService {
  getAll(): Promise<Person[]>;
}
