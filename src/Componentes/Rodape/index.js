import theme from '../../theme';
import ImagemLogo from '../ImagemLogo';
import styled from 'styled-components';

const ComponentsRodape = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};
    border-top: solid 3px ${theme.colors.efeitoAzul};
    width: 100%;
    height: 125px;
    position: relative;
    box-sizing: border-box;

img{
    width: 100%;
    height: 40px;
}
`;

function Rodape() {
    return (
        <ComponentsRodape>
            <footer>
                <ImagemLogo />
            </footer>
        </ComponentsRodape>
    );
}

export default Rodape;