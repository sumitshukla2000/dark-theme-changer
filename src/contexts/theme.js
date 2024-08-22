import { useContext , createContext } from 'react'


//creating context
export const ThemeContext = createContext({
    themeMode : "light"
    // lightTheme : () => {},
    // darkTheme : () => {} we can also use this 
});

//creating context provider

export const ThemeProvider = ThemeContext.Provider


//creating Custom hook

export function useTheme(){ //custom hooks
    
    return useContext(ThemeContext);
}





