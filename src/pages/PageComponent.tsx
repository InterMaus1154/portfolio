import {FC, useEffect} from 'react';
import "../styles/Page.css";

interface IPage{
    children: React.ReactNode;
    title: string;
}

const BASE_TITLE = "Mark Kiss Portfolio";

const changeTitle = (title : string) : void => {
    document.title = `${BASE_TITLE} - ${title}`;
}

const PageComponent : FC<IPage> = ({children, title}) =>{
    
    useEffect(()=>{
        changeTitle(title);
    },[title]);
    
    return(
        <>
            {children}
        </>
    );
};

export default PageComponent;