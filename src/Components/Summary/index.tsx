import { Container } from "./style";
import entradasImg from "../../assets/Entradas.svg"
import saidasImg from "../../assets/Saídas.svg"
import totalImg from "../../assets/Total.svg"
import { useTransactions } from "../../Hooks/useTransactions";


export function Summary(){

    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type == 'deposit'){
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        }else{
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }
        
        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total:0
    })
        
   
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="entradas" />
                </header>
                <strong> 
                    {new Intl.NumberFormat('pr-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="Saídas" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pr-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="Total">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pr-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)}
                </strong>
            </div>
        </Container>
        
    )
}