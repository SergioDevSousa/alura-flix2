import styled from 'styled-components';
import VideoService from '../../services/VideoService';
import { useState } from 'react';

const CardTexto = styled.div`
    text-align: center;
    color: white;
    padding: 3rem;
`;
const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 40px 0px 40px 0px;
`;

const CardLabel = styled.label`
    color: white;
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;


const CardInput = styled.input`
    border: 2px solid #2271D1;
    border-radius: 10px;
    background-color: transparent;
    margin-bottom: 2rem;
    padding: 1rem;
    width: 33rem;
    color: white;
    font-size: 20px;
`;

const CardSelect = styled.select`
    border: 2px solid #2271D1;
    border-radius: 10px;
    background-color: transparent;
    margin-bottom: 2rem;
    padding: 1rem;
    width: 33rem;
    color: #2271D1;
    font-size: 1.5rem;
`;

const CardButton = styled.button`
    border: 2px solid white;
    color: white;
    font-size: 18px;
    width: 11rem;
    padding: 1rem;
    background-color: transparent;
    border-radius: 1rem;

    &:hover {
        border: 2px solid rgba(34, 113, 209, 1);
        color: rgba(34, 113, 209, 1);
        background-color: rgba(0, 0, 0, 0.9);
    }
`;


const CardButtonSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LoadingOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    color: white;
    font-size: 24px;
`;

const handleClear = (form) => {
    form.reset();
};

export const FormNovoVideo = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        const form = e.target.closest('form');
    
        const videoData = {
            categoria: form.categoria.value,
            imagem: form.imagem.value,
            link: form.link.value
        };
    
        try {
            setLoading(true);
            const createdVideo = await VideoService.create(videoData);
            console.log('Video criado ', createdVideo);
            window.location.reload();
        } catch (error) {
            console.error('Error: ', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <CardTexto>
                <h1>NOVO VIDEO</h1>
                <p>Complete o formulário para criar um novo CARD de vídeo</p>
            </CardTexto>
            <CardContainer>
                <form action="/NovoVideo" method="POST" id="form-novo-video">
                    <div>
                        <CardLabel htmlFor="categoria">Categoria</CardLabel>
                        <CardSelect id="categoria" name="categoria" required>
                            <option value="">Selecione uma categoria</option>
                            <option value="front End">Front End</option>
                            <option value="Back End">Back End</option>
                            <option value="Mobile">Mobile</option>
                        </CardSelect>
                    </div>
                    <div>
                        <CardLabel htmlFor="imagem">Imagem</CardLabel>
                        <CardInput type="url" id="imagem" name="imagem" placeholder="Digite a url de sua imagem..." />
                    </div>
                    <div>
                        <CardLabel htmlFor="link">Vídeo</CardLabel>
                        <CardInput type="url" id="link" name="link" placeholder="Digite o link do seu vídeo..." />
                    </div>
                    <CardButtonSection>
                        <CardButton type="submit" onClick={handleClick}>Guardar</CardButton>
                        <CardButton type="reset" onClick={() => handleClear(document.querySelector('#form-novo-video'))}>Limpar</CardButton>
                    </CardButtonSection>
                </form>
            </CardContainer>
            {loading && <LoadingOverlay>Enviando...</LoadingOverlay>}
        </>

    );
};