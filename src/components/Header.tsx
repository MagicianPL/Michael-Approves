import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    height: 150px;
    background: black;
    display: flex;
    align-items: center;
    padding: 10px 50px;
    position: relative;

    .logo {
        width: 120px;
        height: 120px;
        background: yellow;
        border-radius: 50%;
    }

    p {
        color: white;
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
            <div className="logo"></div>
            <p>Only approved restaurants!</p>
        </StyledHeader>
    );
};

export default Header;