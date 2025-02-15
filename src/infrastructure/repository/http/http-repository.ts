import axios, { AxiosError, AxiosInstance } from "axios";
import { IHttpRepository } from "./http-repository-interface";
import { injectable } from "inversify";
import { GetPeopleResponseDto } from "../../dtos/person/get-people-response-dto";
import { RegisterPersonInputDto } from "../../dtos/person/register-person-input-dto";
import { RegisterPersonResponseDto } from "../../dtos/person/register-person-response-dto";
import { RegisterPersonInvalidResponseDto } from "../../dtos/validations/register-person-invalid-response-dto";

@injectable()
export class HttpRepository implements IHttpRepository {
  private readonly axiosClient: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosClient = axios.create({
      baseURL: baseUrl,
    });
  }

  async getAll(): Promise<GetPeopleResponseDto> {
    const { data } = await this.axiosClient.get<GetPeopleResponseDto>("people");
    return data;
  }

  async post(body: RegisterPersonInputDto): Promise<RegisterPersonResponseDto> {
    try {
      const axiosResponse =
        await this.axiosClient.post<RegisterPersonResponseDto>("people", body);

      return axiosResponse.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError<RegisterPersonInvalidResponseDto> = error;

        const data = axiosError.response?.data;

        return {
          errors: data,
          errorMessage: "Validations",
        };
      } else {
        throw new Error("Error on post http client");
      }
    }
  }
}
