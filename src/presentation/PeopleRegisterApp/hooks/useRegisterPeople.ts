import { useEffect, useState } from "react";
import container from "../../../infrastructure/container";
import { TYPES } from "../../../infrastructure/container-types";
import { IRegisterPersonService } from "../../../infrastructure/services/person/register-person-service-interface";
import { RegisterPersonInputDto } from "../../../infrastructure/dtos/person/register-person-input-dto";
import { Person } from "../../../domain/models/Person";

export const useRegisterPeople = () => {
  const [newPerson, setNewPerson] = useState<RegisterPersonInputDto>();

  const [registeredPerson, setRegisteredPerson] = useState<Person>();

  useEffect(() => {
    if (newPerson) {
      const fetchPeople = async () => {
        const registerPersonService = container.get<IRegisterPersonService>(
          TYPES.IRegisterPersonService
        );

        const response = await registerPersonService.register(newPerson);

        setRegisteredPerson(response);
      };

      fetchPeople();
    }

    return () => {
      setNewPerson(undefined);
    };
  }, [newPerson]);

  return { setNewPerson, registeredPerson };
};
