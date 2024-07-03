import ImagemBanner from '../ImagemBanner';
import styled from 'styled-components';
import theme from '../../theme';

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 30px;
`;

const BannerTexto = styled.div`
    text-align: start;
    color: ${theme.colors.botaoAzul};
    margin-top: -400px; /* Ajuste a posição aqui conforme necessário */
    padding: 0px 40px;

    h1{
        background-color: ${theme.colors.botaoAzul};
        color: ${theme.colors.branco};
        width: 18.5rem;
        height: 5.75rem;
        border-radius: 10px;
        text-align: center;
        font-size: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2{
        margin-top: 30px;
        width: 100vh;
        height: auto;
        font-size: 2.875rem;
        color: ${theme.colors.botaoAzul};
    }
    p{
        margin-top: 30px;
        width: 100vh;
        height: auto;
        font-size: 1.2rem;
        font-weight: lighter;
        color: ${theme.colors.botaoAzul};
    }
    img{
        width: 546px;
        height: 333px;
        margin-top: -300px;
        margin-left: 780px;
    }
`;

function Banner() {
    return (
        <BannerContainer>
            <ImagemBanner />
            <BannerTexto>
                <h1>FRONT-END</h1>
                <h2>SEO com React</h2>
                <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
            <ImagemBanner />
            </BannerTexto>
        </BannerContainer>
    );
}

export default Banner;
