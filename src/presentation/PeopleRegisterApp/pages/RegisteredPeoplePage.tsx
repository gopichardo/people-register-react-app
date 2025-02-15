import { useNavigate } from "react-router-dom";
import { PeopleList } from "../components/PeopleList"
import { useFetchRegisteredPeople } from "../hooks/useFetchRegisteredPeople";
import { CompanyImageLayout } from "../layout/CompanyImageLayout";

export const RegisteredPeoplePage = () => {
    const navigate = useNavigate();

    const {
        people
    } = useFetchRegisteredPeople();

    const handleOnClick = () => {
        navigate("/")
    }

    return (
        <CompanyImageLayout title="Registros">
            <PeopleList data={people} />
            <div className="d-grid gap-2 mb-3">
                <button className="btn btn-primary" onClick={handleOnClick}>Regresar</button>
            </div>
        </CompanyImageLayout>
    )
}
