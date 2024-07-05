import { createContext, useEffect, useState } from "react";

export const ContextoExemplo = createContext(null);

export const ContextoProvider = ({ children }) => {

    const [openModal, setOpenModal] = useState(false);
    // const [cards, setCards] = useState([]);

    const toggleModal = () => {
        setOpenModal(estado => !estado)
    }

    // const deletarCard = () => {
    //   fetch();
    // }

    const categorias = [
        { nome: "frontend" },
        { nome: "backend" },
        { nome: "mobile" }
    ]

    useEffect(() => {
        console.log(openModal);
    }, [openModal]);

    const compartilhados = {
        openModal,
        toggleModal,
        // deletarCard,
        categorias,
        // cards
    }

    return (
        <ContextoExemplo.Provider value={compartilhados}>
            {children}
        </ContextoExemplo.Provider>
    )
}