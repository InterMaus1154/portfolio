import React, {FC} from 'react';
import {AnimatePresence} from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import NoPage from "../../pages/NoPage";

const RoutesComponent: FC = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home/>}></Route>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/projects"} element={<Projects/>}>
                    <Route path={":id"}></Route>
                </Route>
                <Route path={"*"} element={<NoPage />}/>
            </Routes>
        </AnimatePresence>
    );
};

export default RoutesComponent;