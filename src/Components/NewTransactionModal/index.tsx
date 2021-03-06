import Modal from "react-modal"
import { Container, TransactionTypeContainer, RadioBox} from "./styles"
import saidasImg from "../../assets/Saídas.svg"
import entradasImg from "../../assets/Entradas.svg"
import { FormEvent, useState, useContext} from "react"
import { api } from "../../services/api"
import { useTransactions } from "../../Hooks/useTransactions"

interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactioModal({isOpen, onRequestClose}: NewTransactionModalProps){

    const {createTransaction} = useTransactions()

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

     async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
          title,
          amount,
          category,
          type
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose();
    }

    return(
        <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
          <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close">
            <strong>X</strong>
          </button>
          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>

            <input
              placeholder="Título"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <input
              type="number"
              placeholder="Preço"
              value={amount}
              onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox 
                type="button"
                onClick={() => {setType('deposit')}}
                isActive={type == 'deposit'}
                activeColor="green"
                 >
                    <img src={entradasImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                type="button"
                onClick={() => {setType('withdraw')}}
                isActive={type == 'withdraw'}
                activeColor="red"
                >
                    <img src={saidasImg} alt="Saída" />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>
            <input 
              placeholder="Categoria"
              value={category}
              onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
                CADASTRAR
            </button>
          </Container>
            
      </Modal>
    )
}