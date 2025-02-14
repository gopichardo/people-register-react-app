import { useEffect, useState } from "react";
import { IGetPersonService } from "../../../infrastructure/services/person/get-person-service-interface";
import { Person } from "../../../domain/models/Person";
import container from "../../../infrastructure/container";
import { TYPES } from "../../../infrastructure/container-types";

export const useFetchRegisteredPeople = () => {
  const [people, setPeople] = useState<Person[]>();

  useEffect(() => {
    const fetchPeople = async () => {
      const getPersonService = container.get<IGetPersonService>(
        TYPES.IGetPersonService
      );

      const response = await getPersonService.getAll();
      setPeople(response);
    };

    fetchPeople();
  }, []);

  return { people };
};
