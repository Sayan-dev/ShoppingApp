import { DefaultTheme as NavDefaultTheme,DarkTheme as NavDarkTheme} from '@react-navigation/native';
import React from 'react';

import { configureFonts, DarkTheme,DefaultTheme } from 'react-native-paper';
import { black, orange50, orange700,orange900,purple700, pinkA400, red600,grey800, white } from './colors';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
      fontSize:16
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
      fontSize:16

    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
      fontSize:14

    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
      fontSize:16

    },
  },
};


export const theme={
    light:{
      ...DefaultTheme,
      colors:{
          primary: orange900,
          accent: orange50,
          background: '#fff',
          surface: white,
          error: red600,
          text: black,
          onBackground: '#000000',
          onSurface: '#000000',
          // disabled: color(black).alpha(0.26).rgb().string(),
          // placeholder: color(black).alpha(0.54).rgb().string(),
          // backdrop: color(black).alpha(0.5).rgb().string(),
          notification: pinkA400,
      },
      fonts:configureFonts(fontConfig),
      
      
      animation: {
        scale: 1.0,
      },
    },
    dark:{
      ...DarkTheme,
      colors:{
        ...DarkTheme.colors,
        primary:purple700
      },
      fonts:configureFonts(fontConfig),
      animation: {
        scale: 1.0,
      }
      
  
    }

}

export const navTheme={
  light:{
    ...NavDefaultTheme,
    colors:{
      ...NavDefaultTheme.colors,
      primary:orange900
    }

  },
  dark:{
    ...NavDarkTheme,
    primary:grey800,
    background:grey800

  }
}


