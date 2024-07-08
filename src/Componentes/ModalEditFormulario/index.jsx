import { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoService from '../../services/VideoService';

const ModalPadrao = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 50vh;
  width: 70%;
  max-width: 600px;
  border-radius: .7rem;
  background: #262626;
  color: white;
  padding: 2rem;
  z-index: 1000;
  overflow: auto;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ModalLabel = styled.label`
  color: white;
  font-size: 1.2rem;
`;

const ModalInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #2271d1;
  border-radius: 5px;
`;

const ModalButton = styled.button`
  padding: 1rem;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ModalSelect = styled.select`
    border: 2px solid #2271D1;
    border-radius: 10px;
    background-color: transparent;
    margin-bottom: 2rem;
    padding: 1rem;
    width: 33rem;
    color: #2271D1;
    font-size: 1.5rem;
`;

export const ModalEditForm = ({ videoId, closeModal }) => {
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const fetchedVideo = await VideoService.getById(videoId);
                setCategoria(fetchedVideo.categoria);
                setImagem(fetchedVideo.imagem);
                setLink(fetchedVideo.link);
            } catch (error) {
                console.error('Erro ao carregar video para edição: ', error);
            }
        };

        fetchVideo();
    }, [videoId]);
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const videoData = {
            categoria,
            imagem,
            link
        };

        try {
            await VideoService.update(videoId, videoData);
            closeModal();
            window.location.reload();
        } catch (error) {
            console.error('Erro ao editar vídeo: ', error);
        }
    };

    const handleClear = (form) => {
        form.reset();
    };

    return (
        <ModalPadrao id="edit-form">
            <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
            <ModalForm onSubmit={handleFormSubmit}>
                <ModalLabel htmlFor="categoria">Categoria</ModalLabel>
                <ModalSelect 
                    id="categoria" 
                    name="categoria" 
                    onChange={(e) => setCategoria(e.target.value)}
                    required>
                    <option value="" disabled>Selecione uma categoria</option>
                    <option value="Front End" selected={categoria === 'Front End'}>Front End</option>
                    <option value="Back End" selected={categoria === 'Back End'}>Back End</option>
                    <option value="Mobile" selected={categoria === 'Mobile'}>Mobile</option>
                </ModalSelect>

                <ModalLabel htmlFor="imagem">Imagem</ModalLabel>
                <ModalInput
                    type="url"
                    id="imagem"
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                    placeholder="Digite a URL da imagem"
                    required
                />

                <ModalLabel htmlFor="link">Vídeo</ModalLabel>
                <ModalInput
                    type="url"
                    id="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Digite a URL do vídeo"
                    required
                />

                <ModalButton type="submit">Atualizar</ModalButton>
                <ModalButton type="button" onClick={() => handleClear(document.querySelector('#edit-form'))}>Limpar</ModalButton>
            </ModalForm>
        </ModalPadrao>
    );
};

export default ModalEditForm;