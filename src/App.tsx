import { GlobalStyle } from "./styles/global";
import { Header } from "./Components/Header" 
import { DashBoard } from "./Components/Dashborder";
import Modal from "react-modal"
import { useState } from "react";
import { NewTransactioModal } from "./Components/NewTransactionModal";
import { TransactionsProvider } from "./Hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModalOpen(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModalOpen(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModalOpen}/>
      <DashBoard/>
      <NewTransactioModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModalOpen}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;
