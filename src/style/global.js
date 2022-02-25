import { createGlobalStyle } from "styled-components";

export const theme = {
    primary: "#7c76ff",
    black: "#292929",
    red: "#f64848",
    green: "#48f655",
    gray: "#5b5b5b",
    white: "#FFF",
    lightGray: "#808080",
    background: "#eff1ff",
    topBar: "#e2e4ff",
};

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        font-family: "Fira Sans",Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        button, input, textarea {
        box-sizing: border-box;
        font-family: inherit;
    }
`;