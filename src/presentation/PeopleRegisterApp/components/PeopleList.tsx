import { useFetchRegisteredPeople } from "../hooks/useFetchRegisteredPeople"

export const PeopleList = () => {

    const {
        people
    } = useFetchRegisteredPeople();


    return (
        <ul>
            {
                people?.map(({ Name, Email }) => (
                    <li key={Email}>
                        <p>{Name}</p>
                    </li>
                ))
            }
        </ul>
    )
}
