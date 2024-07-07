import styled from 'styled-components';
import ImagemBanner from '../ImagemBanner';

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 2rem;

`

const BannerTexto = styled.div`
    text-align: start;
    color: white;
    margin-top: -25rem;
    padding: 0px 40px;
    color: var (--label-color);

    h1{
        background-color: var(--color-frontend);
        border-radius: 1rem;
        width: 18.5rem;
        height: 5.75rem;
        text-align: center;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2{
        margin-top: 2rem;
        width: 100vh;
        height: auto;
        font-size: 2.5rem;
    }
    p{
        margin-top: 2rem;
        width: 100vh;
        font-size: 1.2rem;
        font-weight: lighter;
    }
    img{
        width: 40vw;
        height: auto;
        margin-top: -18rem;
        margin-left: 48rem;
    }
`

function Banner() {
    return (
        <BannerContainer>
            <ImagemBanner />
            <BannerTexto>
                <h1>FRONT-END</h1>
                <h2>SEO com React</h2>
                <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
                <img src='/imagens/player.png' alt='player'/>
            </BannerTexto>
        </BannerContainer>
    );
}

export default Banner;
