import {FC, ReactNode} from 'react';
import {motion} from "framer-motion";

interface IPageTemplate {
    className: string;
    children: ReactNode;
}

const PageTemplate: FC<IPageTemplate> = ({className, children}) => {
    return (
        <motion.section
            className={`${className} Page--component`}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{delay: 0.5} }}
            exit={{opacity: 0}}
        >
            {children}
        </motion.section>
    );
};

export default PageTemplate;