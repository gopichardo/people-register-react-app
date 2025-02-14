import { CompanyDto } from "./company-dto";

export type PersonDto = {
  contactName: string;
  company: CompanyDto;
  phone: string;
  email: string;
};
