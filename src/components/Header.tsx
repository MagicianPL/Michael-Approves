import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header`
    width: 100%;
    min-height: 150px;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    position: relative;
    font-weight: bold;

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 65%;
        height: 1px;
        background: ${({theme}) => theme.colors.primary};
        left: 50%;
        transform: translateX(-50%);
        opacity: 0.2;
        border-radius: 5px;
    }

    .desc {
        color: ${({theme}) => theme.colors.primary};
        font-weight: bold;
        font-size: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        @media (max-width: 900px) {
            font-size: 33px;
        }

        @media (max-width: 750px) {
            position: static;
            transform: none;
        }
    }
    
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <p className="desc">Only approved restaurants!</p>
        </StyledHeader>
    );
};

export default Header;