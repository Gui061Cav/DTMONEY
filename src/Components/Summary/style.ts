import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2em;
margin-top: -10em;

div{
    background: var(--shape);
    padding: 1.5em;
    border-radius: 0.25em;
    color: var(--text-title);

    &.Total{
    background: var(--green);
    color: #fff;
}

header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
strong{
    margin-top: 1em;
    font-size: 2em;
    font-weight: 500;
    line-height: 3em;
    display: block;
}
}


`