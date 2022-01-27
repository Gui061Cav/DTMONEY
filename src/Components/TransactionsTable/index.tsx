import { useContext, useEffect, useState } from "react";
import { Container } from "./style";
import { api } from '../../services/api'
import { TransactionsContext } from "../../TransactionsContext";




export function TransactionsTable(){
    const {transactions} = useContext(TransactionsContext)
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
                        <td className={transactions.type}>{new Intl.NumberFormat('pr-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        }).format(transactions.amount)}
                        </td>
                        <td>{transactions.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transactions.createdAt))}</td>
                    </tr>
                    )) }
                </tbody>
            </table>
        </Container>
    )
}