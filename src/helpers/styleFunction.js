const palette = {
  primary: {
    light: '#7e83d4',
    main: '#5F68D9',
    dark: '#303ac2',
    wash: '#EBECFF',
    contrastText: '#fff',
  },
  secondary: {
    light: '#62d3ff',
    main: '#00A2E0',
    dark: '#0074ae',
    contrastText: '#000',
  },
  success: {
    light: '#9df971',
    main: '#69C540',
    dark: '#329402',
  },
  text: {
    primary: '#4A4A4A',
    secondary: '#2B6BCB',
    disabled: '#ddd',
    systemWhite: '#fff',
    systemWash: '#ECECEC',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  background: {
    default: '#ECECEC',
  },

  ascents: {
    orange: '#F58323',
    green: '#69C540',
    honey: '#FFC937',
    primary: '#5F68D9',
    secondary: '#d7f2ff',
    systemWhite: '#fff',
    systemWash: '#ECECEC',
    systemMetalLight: '#3A3A3A',
    systemMetalDark: '#2F2F2F',
    systemSkyLight: '#EDF5FF',
    systemSkyDark: '#c9deff',
  },

  contrast: {
    orange: '#d35f00',
    green: '#329402',
    honey: '#ffae00',
    primary: '#303ac2',
    secondary: '#0074ae',
    systemWhite: '#eee',
    systemWash: '#ccc',
    systemMetalLight: '#222222',
    systemMetalDark: '#111',
    systemSkyLight: '#a6c9f5',
    systemSkyDark: '#73a9ff',
  },
};

export const styledBy = (color) => {
  const theme = {};

  theme.primary = palette.ascents[color];
  theme.accent = palette.contrast[color];
  theme.background = palette.ascents[color];

  return theme;
};
