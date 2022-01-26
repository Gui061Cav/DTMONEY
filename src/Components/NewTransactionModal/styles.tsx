import styled from "styled-components";
import { darken } from "polished"
import { transparentize } from "polished";
export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5em;
        margin-bottom: 2em;
    }
    input{
        width: 100%;
        padding: 0 1.5em;
        height: 4em;
        border-radius: 0.3em;
        background: #d7d7d7;
        border: 1px solid #d7d7d7;
        font-weight: 400;
        font-size: 1em;

        & + input{
            margin-top: 1em;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5em;
        height: 4em;
        background: var(--green);
        color: #fff;
        border-radius: 0.30em;
        border: 0;
        font-size: 1em;
        margin-top: 1.5em;
        font-weight: 600;

        transition: filter 0.2s ease-in-out;

        &:hover{
            filter: brightness(0.7);
        }
    }

    
`
export const TransactionTypeContainer = styled.div`
    margin-bottom: 1em;
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5em ;
    background: white;
`

interface RadioBoxProps{
    isActive: Boolean
    activeColor: 'green' | 'red'
}

const Colors={
    green:'#33cc95',
    red: '#e52e4d'
}
export const RadioBox = styled.button<RadioBoxProps>`

    height: 4em;
    border: 1px solid #d7d7d7;
    border-radius: 0.25em;

    background: ${(props) => props.isActive 
      ? transparentize (0.9, Colors[props.activeColor])
      : 'transparent'
    };

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.5s ease-in-out;

    &:hover{
        border-color: ${darken(0.2, '#d7d7d7')};
    }

    img{
        width: 20px;
        height: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1em;
        font-size: 1em;
        color: var(--text-title);
    }
    
`