import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import VideoService from "../../services/VideoService";

const ModalPadrao = styled.div`
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 50vh;
    width: 70%;
    max-width: 600px;
    border-radius: .7rem;
    background: #1c1c74;
    color: white;
    padding: 2rem;
    z-index: 1000;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: white;
    font-size: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
`;

const Modal = ({ videoId, closeModal }) => {
    
    const extractVideoId = (videoUrl) => {
        let videoId = '';
        if (videoUrl.includes('youtu.be/')) {
            videoId = videoUrl.split('youtu.be/')[1];
        } else if (videoUrl.includes('watch?v=')) {
            videoId = videoUrl.split('watch?v=')[1];
        }
        return videoId;
    };

    const fetchVideoThumbnail = async () => {
        try {
            const video = await VideoService.getById(videoId);
            const videoIdFromUrl = extractVideoId(video.link);

            return {
                imagem: video.imagem,
                categoria: video.categoria,
                link: `https://www.youtube.com/embed/${videoIdFromUrl}`
            };
        } catch (error) {
            console.error(`Error while fetching video ${videoId}:`, error);
            return null;
        }
    };

    const [videoData, setVideoData] = React.useState(null);

    React.useEffect(() => {
        fetchVideoThumbnail().then(data => {
            setVideoData(data);
        });
    }, [videoId]);

    return (
        videoData && (
            <ModalPadrao>
                <CloseButton onClick={closeModal}>&times;</CloseButton>
                <iframe
                    title="Video Player"
                    width="100%"
                    height="315"
                    src={videoData.link}
                    allowFullScreen
                ></iframe>
            </ModalPadrao>
        )
    );
};

Modal.propTypes = {
    videoId: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default Modal;
