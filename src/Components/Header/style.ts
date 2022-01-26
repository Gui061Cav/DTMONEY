import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2em 1em 13em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
      font-size: 1em;
      padding: 0.7em 1em;
      color: #FFF;
      background: var(--blue-light);
      border: 0;
      border-radius: 0.25em;
      transition: 0.5s ease-in-out;
  }
  button:hover{
      background: var(--green);
  }
`