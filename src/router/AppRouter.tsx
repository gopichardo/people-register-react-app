import { Route, Routes } from "react-router-dom"
import { PeopleRegisterAppRoutes } from "../PeopleRegisterApp/routes/PeopleRegisterAppRoutes"


export const AppRouter = () => {
    return (

        <Routes>
            <Route path="/*" element={<PeopleRegisterAppRoutes />} />
        </Routes>
    )
}
