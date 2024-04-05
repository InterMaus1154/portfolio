import {FC} from 'react';
import {motion} from "framer-motion";
import PageTemplate from "./PageTemplate";
import ReactCurvedText from 'react-curved-text';
import Hero from '../components/Hero';
import "../styles/component_styles/Home.css";

const Home: FC = () => {
    return (
        <PageTemplate className={"Home--section"}>
            <Hero />
        </PageTemplate>
    );
};

export default Home;

