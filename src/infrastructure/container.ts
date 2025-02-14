import { Container } from "inversify";
// import { AxiosHttpClient } from "./services/http/axios-http-client";
import { IHttpClient } from "./services/http/http-client-interface";
import { IGetPersonService } from "./services/person/get-person-service-interface";
import { GetPersonService } from "./services/person/get-person-service";
import { IGetRegisteredPersonsUseCase } from "../domain/use-cases/person/get-registered-persons-usecase-interface";
import { GetRegisteredPersonsUseCase } from "../domain/use-cases/person/get-registered-persons-use-case";
import { PersonApiRepository } from "./repository/person-api-repository";
import { IPersonApiRepository } from "./repository/person-api-repository-interface";
import { IRegisterPersonUseCase } from "../domain/use-cases/person/register-person-usecase-interface";
import { RegisterPersonUseCase } from "../domain/use-cases/person/register-person-usecase";
// import { REGISTER_PERSON_API_URL } from "./config/configurations";
import { DummyHttpClient } from "./services/http/dummy-http-client";
import { TYPES } from "./container-types";
import { REGISTER_PERSON_API_URL } from "./config/configurations";

const container = new Container({
  defaultScope: "Singleton",
});

// container
//   .bind<IHttpClient>(TYPES.IHttpClient)
//   .toDynamicValue(() => new AxiosHttpClient(REGISTER_PERSON_API_URL));

container
  .bind<IHttpClient>(TYPES.IHttpClient)
  .toDynamicValue(() => new DummyHttpClient(REGISTER_PERSON_API_URL));

container.bind<IGetPersonService>(TYPES.IGetPersonService).to(GetPersonService);
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
