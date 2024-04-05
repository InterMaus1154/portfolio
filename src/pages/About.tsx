import {FC} from 'react';
import PageTemplate from "./PageTemplate";

const About: FC = () => {
    return (
        <PageTemplate className={"About--section"}>
            <h1 className="Section--title">Amazing facts about me</h1>
        </PageTemplate>
    );
};

export default About;