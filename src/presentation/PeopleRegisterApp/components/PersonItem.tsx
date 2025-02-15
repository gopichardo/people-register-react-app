import { Person } from "../../../domain/models/Person"

type PersonItemProps = {
    person?: Person
}
export const PersonItem = ({ person }: PersonItemProps) => {
    return (
        <tr>
            <th>{person?.Company?.Name}</th>
            <td>{person?.Name}</td>
            <td>{person?.Email}</td>
            <td>{person?.Phone}</td>
        </tr>
    )
}
