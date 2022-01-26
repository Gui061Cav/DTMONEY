import { useEffect, useState } from "react";
import { Container } from "./style";
import { api } from '../../services/api'

export function TransactionsTable(){


    interface Transactions {
        id: number,
        title: string
        amount: number
        category: string
        type: string
        createdAt: string
    }

    const [transactions, setTransactions] = useState<Transactions[]>([])
    useEffect(() => {
        api.get('/transactions')
        .then(Response => setTransactions(Response.data.transactions))
    },[])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th><strong>Titulo</strong></th>
                        <th><strong>Valor</strong></th>
                        <th><strong>Categoria</strong></th>
                        <th><strong>Data</strong></th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transactions => (
                     <tr key={transactions.id}>
                        <td>{transactions.title}</td>
                        <td className={transactions.type}>{transactions.amount}</td>
                        <td>{transactions.category}</td>
                        <td>{transactions.createdAt}</td>
                    </tr>
                    )) }
                </tbody>
            </table>
        </Container>
    )
}