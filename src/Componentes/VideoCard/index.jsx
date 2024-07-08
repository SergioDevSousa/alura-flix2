import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VideoService from '../../services/VideoService';
import vetorEditar from './VetorEditar.png';
import vetorDeletar from './VetorDel.png';
import Modal from '../ModalPlayVideo';
import ModalEditForm from '../ModalEditFormulario';

const VideoCardContainer = styled.div`
    width: 100%;
    max-width: 400px;
    height: auto;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px ${(props) => props.shadowColor || 'var(--dark-grey)'};
    transition: transform 0.2s ease-in-out;
    border: 2px solid ${(props) => props.borderColor || 'var(--dark-grey)'};
    
    @media (max-width: 767px) {
        max-width: 100%;
    }
`;

const Thumbnail = styled.div`
    width: 100%;
    height: 15rem;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 2px solid ${(props) => props.borderColor || 'var(--dark-grey)'};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
`;

const EditDeleteContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    padding: 8px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 2px solid ${(props) => props.borderColor || 'var(--dark-grey)'};

    button {
        background: none;
        border: none;
        color: white;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
`;

const ConfirmationModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.5);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;

    p {
      margin-bottom: 1rem;
      text-align: center;
    }

    button {
        margin: 0.5rem;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        background-color: var(--color-frontend);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: var(--color-backend);
        }
    }

    .cancel-button {
        background-color: var(--color-mobile-gestao);
        &:hover {
            background-color: var(--dark-grey);
        }
    }

`;

export const VideoCard = ({ videoId }) => {
    const [video, setVideo] = useState(null);
    const [shadowColor, setShadowColor] = useState('var(--dark-grey)');
    const [borderColor, setBorderColor] = useState('var(--dark-grey)');
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    useEffect(() => {
        const fetchVideoById = async () => {
            try {
                const fetchedVideo = await VideoService.getById(videoId);
                setVideo(fetchedVideo);
            } catch (error) {
                console.error(error);
            }
        };

        fetchVideoById();
    }, [videoId]);

    useEffect(() => {
        if (video && video.categoria) {
            switch (video.categoria) {
                case 'Front End':
                    setShadowColor('var(--color-frontend)');
                    setBorderColor('var(--color-frontend)');
                    break;
                case 'Back End':
                    setShadowColor('var(--color-backend)');
                    setBorderColor('var(--color-backend)');
                    break;
                case 'Mobile':
                    setShadowColor('var(--color-mobile-gestao)');
                    setBorderColor('var(--color-mobile-gestao)');
                    break;
                default:
                    setShadowColor('var(--dark-grey)');
                    setBorderColor('var(--dark-grey)');
            }
        }
    }, [video]);

    const openVideoModal = () => {
        setShowModal(true);
    };

    const openEditModal = () => {
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
    };

    const closeVideoModal = () => {
        setShowModal(false);
    };

    const openConfirmationModal = () => {
        setShowConfirmationModal(true);
    };

    const closeConfirmationModal = () => {
        setShowConfirmationModal(false);
    };

    const handleDeleteVideo = async () => {
        try {
            await VideoService.delete(videoId);
            window.location.reload();
            setShowConfirmationModal(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <VideoCardContainer className='video-card' shadowColor={shadowColor} borderColor={borderColor}>
            <Thumbnail className='video-thumbnail' borderColor={borderColor} onClick={openVideoModal}>
                {video ? (
                    <img src={video.imagem} alt="Thumbnail do Vídeo" />
                ) : (
                    <p>Carregando...</p>
                )}
            </Thumbnail>
            <EditDeleteContainer className='edit-delete'>
                <ButtonContainer className="button-container" borderColor={borderColor}>
                    <button onClick={openEditModal}>
                        <img src={vetorEditar} alt="Editar" />
                        {/* Editar */}
                    </button>
                    <button onClick={openConfirmationModal}>
                        <img src={vetorDeletar} alt="Deletar" />
                        {/* Deletar */}
                    </button>
                </ButtonContainer>
            </EditDeleteContainer>
            {showEditModal && <ModalEditForm videoId={videoId} closeModal={closeEditModal} />}
            {showModal && <Modal videoId={videoId} closeModal={closeVideoModal} />}
            {showConfirmationModal && (
                <ConfirmationModal>
                    <p>Deseja realmente apagar o card de vídeo?</p>
                    <button onClick={handleDeleteVideo} className='delete-button'>Confirmar</button>
                    <button onClick={closeConfirmationModal} className='cancel-button'>Cancelar</button>
                </ConfirmationModal>
            )}
        </VideoCardContainer>
    );
};

export default VideoCard;