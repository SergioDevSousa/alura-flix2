import ImagemLogo from '../ImagemLogo';
import styled from 'styled-components';

const FooterElement = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    color: #F7F7F7;
    background: #262626;
    min-height: 10vh;
    border-top: solid var(--color-blue);
`



const Rodape = () => {
    return (
        <FooterElement>
            <ImagemLogo />
        </FooterElement>
    )
}

export default Rodape
