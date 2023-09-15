import {FC, createContext, useState} from 'react';

type ThemeTypes = "light" | "dark" | "light-green";

interface IThemeContext{
    theme: ThemeTypes;
    setTheme: React.Dispatch<React.SetStateAction<ThemeTypes>>;
}

export const ThemeContext = createContext({theme: "light", setTheme: () =>{}} as IThemeContext);

interface IThemeProvider{
    children: React.ReactNode;
}

const ThemeProvider : FC<IThemeProvider> = ({children}) =>{

    const [theme, setTheme] = useState<ThemeTypes>("light");

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;