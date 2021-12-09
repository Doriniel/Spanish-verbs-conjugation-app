import { Route, Routes } from "react-router";
import { Navigate  } from "react-router-dom";
import Settings from "../pages/settings/Settings";
import Main from "../pages/Main";
import Answer from "../pages/Answer";
import Conjugation from "../pages/conjugation/Conjugation";
import { useSelector } from "react-redux";
import { settingsSelector } from "../redux/selectors";


// RootRouter - корневой роутер
export default function RootRouter() {
    const settings = useSelector(settingsSelector)
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Settings/>} />
                <Route path={'/settings'} element={<Settings />} />
                <Route path={'/conjugation'} element={<Conjugation />} />
                <Route path={'/answer'} element={<Answer />} />
            </Routes>
        </>
        
    )
}