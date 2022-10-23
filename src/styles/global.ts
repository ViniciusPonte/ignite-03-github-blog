import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors['base-background']};
        color: ${(props) => props.theme.colors['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button, h1, span, p {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
    }
`
