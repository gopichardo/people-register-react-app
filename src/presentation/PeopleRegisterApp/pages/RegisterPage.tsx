import { RegisterPersonForm } from "../components/RegisterPersonForm";
import { CompanyImageLayout } from "../layout/CompanyImageLayout";

export const RegisterPage = () => {
  return (
    <CompanyImageLayout title='Registro persona'>
      <RegisterPersonForm />
    </CompanyImageLayout>
  );
};
