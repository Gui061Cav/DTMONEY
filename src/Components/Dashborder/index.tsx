import { Container } from "../Dashborder/style";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export function  DashBoard(){
    return(
        <Container>
            <Summary></Summary>
            <TransactionsTable></TransactionsTable>
        </Container>
    )
}