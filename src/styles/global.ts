import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #F0F2F5;
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #FFFFFF;
    --green: #33cc95
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
html{
    @media (max-width: 1080px){
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 87.75%;
    }
}
button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
body, textarea, input, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

.react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
    width: 100% ;
    max-width: 576px;
    background: white;
    padding: 3em;
    position: relative;
    border-radius: 0.30em;
}

.react-modal-close{
    position: absolute;
    right: 1.5em;
    top: 1.5em;
    border: 0;
    background: transparent;
    transition: filter 0.2s ease-in-out;

    &:hover{
        filter: brightness(0.7);
    }
}
`