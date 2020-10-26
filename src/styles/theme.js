import { DefaultTheme as NavDefaultTheme,DarkTheme as NavDarkTheme} from '@react-navigation/native';
import React from 'react';

import { DarkTheme,DefaultTheme } from 'react-native-paper';
import { black, orange50, orange700,orange900, pinkA400, red600,grey800, white } from './colors';


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
      fonts:'regular',
      animation: {
        scale: 1.0,
      },
    },
    dark:{
      ...DarkTheme,
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


