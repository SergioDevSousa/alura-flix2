import styled from 'styled-components';

const StyledLink = styled.a`
    color: ${props => props.color || 'blue'}; /* Define a cor com base na prop, padrão para azul */
    background-color: ${props => props.bgColor || 'transparent'}; /* Define a cor de fundo com base na prop, padrão para transparente */
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid ${props => props.borderColor || 'transparent'};
    text-decoration: none;

    &:hover {
    text-decoration: underline;
    }
`;

export default StyledLink;
