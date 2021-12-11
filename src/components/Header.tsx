import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    padding: 10px 50px;
    position: relative;
    color: #342E3A;
    font-weight: bold;

    .logo {
        width: 120px;
        height: 120px;
        background: yellow;
        border-radius: 50%;
    }

    p {
        flex: 1;
        text-align: center;
        font-size: 35px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <p>Only approved restaurants!</p>
        </StyledHeader>
    );
};

export default Header;