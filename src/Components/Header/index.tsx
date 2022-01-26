import { useState } from "react"
import logoImg from "../../assets/Logo.svg"
import { Container } from "./style"
import { Content } from "./style"
import Modal from "react-modal"

interface HeaderProps{
    onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {


    return(
    <Container>
        <Content>
        <img src={logoImg} alt="DTmoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
        Nova transação
        </button>
        </Content>
    </Container>)

}