import { Navigate, Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage"
import { RegisteredPeoplePage } from "../pages/RegisteredPeoplePage"


export const PeopleRegisterAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route path="/registros" element={<RegisteredPeoplePage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
