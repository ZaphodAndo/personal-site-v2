import styled from 'styled-components';

const Tag = styled.div`
    align-self: center;
    text-decoration: none;
    font-weight: 500;
    color: ${props => props.theme.primaryColour};
    background-color: rgba(0,0,0,.2);
    padding: 10px;
    border-radius: 4px;
    max-height: 20px;
    margin-right: 5px;

    transform: translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover, &:focus, &:active {
        background: transparent;
        background-color: rgba(0,0,0,.1);
        color: ${props => props.theme.secondaryColour};

        transform: scale(1.1);
    }
`;

export default Tag;