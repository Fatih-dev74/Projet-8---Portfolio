import React, { createContexte, useContext, useEffect, useState } from 'react';
import { Children } from 'react';

const ThemeContext = createContexte();

export const useeTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({Children}) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );

    useEffect (() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    ToggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};