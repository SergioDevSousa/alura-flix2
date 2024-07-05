import styled from 'styled-components';
import BotaoMenu from '../Botoes';
import ImagemLogo from '../ImagemLogo';

const Header = styled.header`
    display: flex;
    align-items: center;
    min-height: 10vh;
    background: #262626;
`;

const Nav = styled.nav` 
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 1.5rem;
    color: #F7F7F7;
`;

const BotoesWrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

const Cabecalho = () => {

    return (
        <Header>
            <Nav>
                <ImagemLogo />
                <BotoesWrapper>
                    <BotaoMenu>
                        Home
                    </BotaoMenu>

                    <BotaoMenu>
                        Novo Vídeo
                    </BotaoMenu>
                </BotoesWrapper>
            </Nav>
        </Header>
    )
}

export default Cabecalho;
