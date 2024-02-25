import '@emotion/react';
import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    common: {};
    colors: {
      black: string;
      black100: string;
      grey: string;
      white: string;
      light: string;
      green: string;
    };
  }
}

export const theme: Theme = {
  common: {},
  colors: {
    black: '#000000',
    black100: '#0b0b10',
    grey: '#4f4f4f',
    white: '#fff',
    light: '#f8f8f8',
    green: '#6bd05b',
  },
};
