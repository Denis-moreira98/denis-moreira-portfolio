import { darken, lighten, rgba } from "polished";

export const lightTheme = {
   colors: {
      // variables
      main300: "#003c7a",
      main500: "#003c7a",
      second: "#2165c5",
      title: "#191a1c",
      titleContrast: "#d6dbe5",
      text: "#303336",
      textContrast: "#dfe4ef",
      label: "#797e84",
      button: "#f1f5f9",

      // backgrounds
      bodyBg: "#d4e6f7",
      containerBg: "#e6ecf9",
      inputBg: "#ccd2df",
      fadeBg: "rgba(30, 30, 30, 0.3)",

      // colors
      white: "#fff",
      black: "#080808",
      green500: "#10955F",
      yellow500: "#f0cd20",
      orange500: "#ffa323",
      red500: "#e52e4d",
      blue500: "#3089e9",
      gray300: "#959cad",
      gray500: "#7a808e",
      gray700: "#3a3e48",
   },
   effects: {
      // shadows
      shadowTop: "0 -1px 4px rgba(0, 0, 0, 0.15)",
      shadowBottom: "0 1px 4px rgba(0, 0, 0, 0.15)",
      shadowAround: "0px 0px 2px 2px rgba(0, 0, 0, 0.15)",

      // hover elements
      hoverLight: (color: string) => {
         return lighten(0.1, color);
      },
      hoverDark: (color: string) => {
         return darken(0.1, color);
      },
   },
};

export const darkTheme = {
   colors: {
      // variables
      main300: "#c0aa8b",
      main500: "#003c7a",
      second: "#4b95fd",
      title: "#e6ebf6",
      titleContrast: "#191a1c",
      text: "#cdd2df",
      textContrast: "#212325",
      label: "#7e8188",
      button: "#e6ebf6",

      // backgrounds
      bodyBg: "#0d1117",
      containerBg: "#26282b",
      inputBg: "#3b3d41",
      fadeBg: "rgba(10, 10, 10, 0.4)",

      // colors
      white: "#e8ecf8",
      black: "#080808",
      green500: "#49b087",
      yellow500: "#f2c318",
      orange500: "#f69438",
      red500: "#f15757",
      blue500: "#508eec",
      gray300: "#959cad",
      gray500: "#7a808e",
      gray700: "#3a3e48",
   },
   effects: {
      // shadows
      shadowTop: "0 -1px 4px rgba(60, 60, 60, 0.15)",
      shadowBottom: "0 1px 4px rgba(60, 60, 60, 0.15)",
      shadowAround: "0px 0px 2px 2px rgba(60, 60, 60, 0.15)",

      // hover elements
      hoverLight: (color: string) => {
         return lighten(0.1, color);
      },
      hoverDark: (color: string) => {
         return darken(0.1, color);
      },
   },
};
