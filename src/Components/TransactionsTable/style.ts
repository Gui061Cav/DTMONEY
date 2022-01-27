import styled from "styled-components";

export const Container = styled.div`
   margin-top: 4em;

   table{
       width: 100%;
       border-spacing: 0.5em;

       th{
           color: var(--text-body);
           font-weight: 400;
           padding: 1em 2em;
           text-align: left;
           line-height: 1.5em;
       }

       td{
           padding: 1em 2em;
           border: 0;
           background: var(--shape);
           color: var(--text-body);
           border-radius: 0.25em;

           &.first-child{
            color: var(--text-title);
          }

          &.deposit{
              color: var(--green);
          }
          
          &.withdraw{
              color: var(--red);
          }
       }

       
   }
`