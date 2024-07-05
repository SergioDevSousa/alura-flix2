import styled from "styled-components"

const TagPadrao = styled.div`
    background: ${props => {
        switch (props.$titulo) {
            case "frontend":
                return "blue"
            case "backend":
                return "green"
            case "mobile":
                return "yellow"
            default:
                return "white"
        }
    }};
    text-transform: uppercase;
    width: 27rem;
    height: 1rem;
`;

const Tag = ({ titulo }) => {
    return (
        <TagPadrao $titulo={titulo}>
            {titulo}
        </TagPadrao>
    )
}

export default Tag