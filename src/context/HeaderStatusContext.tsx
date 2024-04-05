import {FC, useState, createContext} from 'react';


interface IHeaderStatusContext{
    isHeaderOpen: boolean;
    setHeaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderStatusContext = createContext<IHeaderStatusContext>({} as IHeaderStatusContext);

interface IHeaderStatusProvider {
    children: React.ReactNode;
}

const HeaderStatusProvider : FC<IHeaderStatusProvider> = ({children}) => {

    const [isHeaderOpen, setHeaderOpen] = useState<boolean>(false);

    return (
        <HeaderStatusContext.Provider value={{isHeaderOpen: isHeaderOpen, setHeaderOpen: setHeaderOpen}}>
            {children}
        </HeaderStatusContext.Provider>
    );
};

export default HeaderStatusProvider;