import { Person } from "../../../domain/models/Person";
import { PersonItem } from "./PersonItem";

type PeopleListProps = {
    data?: Person[];
}

export const PeopleList = ({ data = [] }: PeopleListProps) => {

    return (
        <div className="mh-100">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Compañia</th>
                            <th>Contacto</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            data?.map((person) => (<PersonItem key={person.Email} person={person} />))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
