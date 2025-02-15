import { Container } from "inversify";
import { HttpRepository } from "./repository/http/http-repository";
import { IHttpRepository } from "./repository/http/http-repository-interface";
import { IGetPersonService } from "./services/person/get-person-service-interface";
import { GetPersonService } from "./services/person/get-person-service";
import { IGetRegisteredPersonsUseCase } from "../domain/use-cases/person/get-registered-persons-usecase-interface";
import { GetRegisteredPersonsUseCase } from "../domain/use-cases/person/get-registered-persons-use-case";
import { PersonApiRepository } from "./repository/person-api-repository";
import { IPersonApiRepository } from "./repository/person-api-repository-interface";
import { IRegisterPersonUseCase } from "../domain/use-cases/person/register-person-usecase-interface";
import { RegisterPersonUseCase } from "../domain/use-cases/person/register-person-usecase";
import { TYPES } from "./container-types";
import { REGISTER_PERSON_API_URL } from "./config/configurations";
import { RegisterPersonService } from "./services/person/register-person-service";
import { IRegisterPersonService } from "./services/person/register-person-service-interface";

const container = new Container({
  defaultScope: "Singleton",
});

container
  .bind<IHttpRepository>(TYPES.IHttpClient)
  .toDynamicValue(() => new HttpRepository(REGISTER_PERSON_API_URL));

container.bind<IGetPersonService>(TYPES.IGetPersonService).to(GetPersonService);

container
  .bind<IRegisterPersonService>(TYPES.IRegisterPersonService)
  .to(RegisterPersonService);

container
  .bind<IGetRegisteredPersonsUseCase>(TYPES.IGetRegisteredPersonsUseCase)
  .to(GetRegisteredPersonsUseCase);
container
  .bind<IRegisterPersonUseCase>(TYPES.IRegisterPersonUseCase)
  .to(RegisterPersonUseCase);
container
  .bind<IPersonApiRepository>(TYPES.IPersonApiRepository)
  .to(PersonApiRepository);

export default container;
