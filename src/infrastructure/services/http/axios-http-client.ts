import axios, { AxiosInstance } from "axios";
import { IHttpClient } from "./http-client-interface";
import { injectable } from "inversify";
import { GetPeopleResponseDto } from "../../dtos/person/get-people-response-dto";
import { RegisterPersonInputDto } from "../../dtos/person/register-person-input-dto";
import { RegisterPersonResponseDto } from "../../dtos/person/register-person-response-dto";

@injectable()
export class AxiosHttpClient implements IHttpClient {
  private readonly axiosClient: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosClient = axios.create({
      baseURL: baseUrl,
    });
  }

  async getAll(): Promise<GetPeopleResponseDto> {
    const { data } = await this.axiosClient.get<GetPeopleResponseDto>("person");
    return data;
  }

  async post(body: RegisterPersonInputDto): Promise<RegisterPersonResponseDto> {
    const { data } = await this.axiosClient.post<RegisterPersonResponseDto>(
      "person",
      body
    );
    return data;
  }
}
