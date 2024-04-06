import React, {FC, createContext, useState, ReactNode} from 'react';

export type Themes = "clean" | "warm" | "modern" | "dark";

interface IThemeContext {
    theme: Themes;
    setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}
export const ThemeContext = createContext<IThemeContext>({} as IThemeContext );

interface IThemeProvider {
    children: ReactNode;
}
const ThemeProvider : FC<IThemeProvider> = ({children}) =>{

    const [theme, setTheme] = useState<Themes>("clean");

    return(
        <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;