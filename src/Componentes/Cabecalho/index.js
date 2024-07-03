import theme from '../../theme';
import ImagemLogo from '../ImagemLogo';
import styled from 'styled-components';
import StyledLink from '../LinkEstilizado';

const CabecalhoContainer = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${theme.colors.background};
    font-size: 1.25rem;
    box-sizing: border-box;
    
    nav{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.branco};
    gap: 50px;
    border-radius: 10px;
}
img{
    width: 168px;
    height: 40px;
}`;

function Cabecalho() {
    return (
        <CabecalhoContainer>
            <ImagemLogo />
            <nav>
                <StyledLink
                    href="/"
                    color={`${theme.colors.efeitoAzul}`}
                    borderColor={`${theme.colors.efeitoAzul}`}
                >Home</StyledLink>
                <StyledLink
                    href="/novovideo"
                    color={`${theme.colors.branco}`}
                    bgColor={`${theme.colors.background}`}
                    borderColor={`${theme.colors.branco}`}
                >Novo Vídeo</StyledLink>
            </nav>
        </CabecalhoContainer>
    )
}

export default Cabecalho
