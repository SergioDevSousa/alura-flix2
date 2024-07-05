import styled from "styled-components"

const Botao = styled.button`
background: transparent;
border: 2px solid #F7F7F7;
border-radius: .7rem;
line-height: 2lh;
color: #F7F7F7;
padding: 0rem 1.7rem;
font-size: 1.2rem;

&:hover {
    cursor: pointer;
}
`

export { Botao }

const BotaoMenu = ({ children }) => {

    return (
        <Botao>
            {children}
        </Botao>
    )
}

export default BotaoMenu