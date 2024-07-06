import styled from "styled-components"

const TagPadrao = styled.div`
    background: ${props => {
        switch (props.$titulo) {
            case "Front End":
                return "var(--color-frontend)"
            case "Back End":
                return "var(--color-backend)"
            case "Mobile":
                return "var(--color-mobile-gestao)"
            default:
                return "white"
        }
    }};
    text-transform: uppercase;
    color: white;
    width: 27rem;
    height: 1rem;
    padding: 2rem;
    margin-bottom: 1rem;
`;

const Tag = ({ titulo }) => {
    return (
        <TagPadrao $titulo={titulo}>
            {titulo}
        </TagPadrao>
    )
}

export default Tag