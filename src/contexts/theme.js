import { createContext } from 'react';

export const ThemeContext = createContext({
  isDarkModeOn: false,
  toggleTheme:()=>{}
});
