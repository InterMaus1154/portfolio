import React from 'react';
import PageTemplate from "./PageTemplate";
import {NavLink} from "react-router-dom";

const NoPage = () => {
    return (
        <PageTemplate className={""}>
            <h1>Requested page not found</h1>
            <NavLink className={"Action-button"} to={"/"}>Go back home</NavLink>

        </PageTemplate>
    );
};

export default NoPage;