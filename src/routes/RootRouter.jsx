import { Route, Routes } from "react-router";
import Settings from "../pages/Settings";
import Main from "../pages/Main";
import Answer from "../pages/Answer";
import Conjugation from "../pages/Conjugation";

// RootRouter - корневой роутер
export default function RootRouter() {

    return (
        <Routes>
            <Route path={'/'} element={<Main/>} />
            <Route path={'/settings'} element={<Settings />} />
            <Route path={'/conjugation'} element={<Conjugation />} />
            <Route path={'/answer'} element={<Answer />} />
        </Routes>
    )
}