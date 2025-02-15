import { CompanyDto } from "./company-dto";

export type PersonDto = {
  id?: string;
  name: string;
  company: CompanyDto;
  phone: string;
  email: string;
};
