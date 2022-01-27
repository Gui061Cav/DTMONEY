import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";




interface Transaction {
    id: number,
    title: string
    amount: number
    category: string
    type: string
    createdAt: string
}

interface TransactionsProviderProps{
    children: ReactNode
}

interface TransactionsCreateData{
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export const TransactionsContext = createContext<TransactionsCreateData>(
    {} as TransactionsCreateData
    )
export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])
    useEffect(() => {
        api.get('/transactions')
        .then(Response => setTransactions(Response.data.transactions))
    },[])

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const {transaction} = response.data

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

