import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoService from "../../services/VideoService";
import VideoCard from "../VideoCard";
import Tag from "../Tag";

const SectionContainer = styled.section`
    margin: 1.5rem;
    position: relative;
`;

const VideosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: space-between;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

const Section = ({ categoria }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                // Buscar todos os vídeos
                const allVideos = await VideoService.getAll();
                
                // Filtrar vídeos pela categoria desejada
                const filteredVideos = allVideos.filter(video => video.categoria === categoria);

                setVideos(filteredVideos);
            } catch (error) {
                console.error(error);
            }
        };

        fetchVideos();
    }, [categoria]);

    return (
        <SectionContainer>
            <Tag titulo={categoria}>{categoria}</Tag>
            <VideosContainer>
                {videos.map((video) => (
                    <VideoCard key={video.id} videoId={video.id} />
                ))}
            </VideosContainer>
        </SectionContainer>
    );
}

export default Section;
