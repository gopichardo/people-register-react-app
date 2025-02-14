import { Navigate, Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage"


export const PeopleRegisterAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
