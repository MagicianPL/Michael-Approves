import styled from 'styled-components';

const StyledButton = styled.button<any>`
    font-size: 28px;
    padding: 4px 12px;
    color: ${({theme}) => theme.colors.primary};
    border-radius: 8px;
    border: none;
    background: transparent;
    margin: 0 300px 0 auto;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.7s;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }

    &:hover::after {
        transform: scale(1.3);
    }

    ${
        props => props.imgBackground ? `
            &::after {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url("${props.imgBackground}");
            background-size: cover;
            opacity: 0.35;
            z-index: -1;
            border-radius: 8px;
            transition: transform 1s;
            }
        ` : `background: ${props.theme.colors.tertiary};`
    }
`;

export default StyledButton;