import {FC} from 'react';
import {motion} from "framer-motion";
import PageTemplate from "./PageTemplate";
const Home : FC = () => {
    return (
        <PageTemplate className={"Home--section"}>
            <h1>Homepage</h1>
        </PageTemplate>
    );
};

export default Home;

