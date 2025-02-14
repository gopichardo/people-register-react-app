import axios, { AxiosInstance } from "axios";
import { IHttpClient } from "./http-client-interface";
import { injectable } from "inversify";
import { GetPeopleResponseDto } from "../../dtos/person/get-people-response-dto";
import { RegisterPersonInputDto } from "../../dtos/person/register-person-input-dto";
import { RegisterPersonResponseDto } from "../../dtos/person/register-person-response-dto";
import { PersonDto } from "../../dtos/person/person-dto";

interface UsersResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

@injectable()
export class DummyHttpClient implements IHttpClient {
  private readonly axiosClient: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosClient = axios.create({
      baseURL: baseUrl,
    });
  }

  async getAll(): Promise<GetPeopleResponseDto> {
    const { data } = await this.axiosClient.get<UsersResponse[]>("/users");
    console.log("data: ", data);

    const response: PersonDto[] = data.map((user) => {
      const person: PersonDto = {
        contactName: user.name,
        email: user.email,
        phone: user.phone,
        company: {
          name: user.company.name,
        },
      };

      return person;
    });

    const peopleResponseDto: GetPeopleResponseDto = {
      data: response,
      errorMessage: "",
    };
    return peopleResponseDto;
  }

  async post(body: RegisterPersonInputDto): Promise<RegisterPersonResponseDto> {
    const { data } = await this.axiosClient.post<RegisterPersonResponseDto>(
      "person",
      body
    );

    console.log("data: ", data);

    return data;
  }
}
