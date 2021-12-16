import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-around;
    align-items: center;
    transform: translateY(40px);
    opacity: 0;
    animation: appearing 0.7s forwards;
    background: ${({theme}) => theme.colors.tertiary};
    border-radius: 8px;
    padding: 20px;

    @media (max-width: 1299px) {
        justify-content: center;
        gap: 25px;
    }

    @keyframes appearing {
        100% {
            opacity: 1;
            transform: translateY(0);
        }
`;

const StyledImageContainer = styled.div`
    width: 100%;
    max-width: 400px;
    height: 300px;
    overflow: hidden;
    transition: all 0.7s;

    @media (max-width: 1299px) {
        max-width: 490px;
    }

    @media (max-width: 1084px) {
        max-width: 80%;
        height: 465px;
    }

    @media (max-width: 800px) {
        height: 360px;
    }

    @media (max-width: 660px) {
        max-width: 95%;
    }

    @media (max-width: 500px) {
        height: 250px;
    }

    @media (max-width: 380px) {
        height: 187px;
    }

    &:hover {
            transform: scale(1.2);
        }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 5px;
    }
`;

interface Props {
    photos: string[];
}

const Photos: React.FC<Props> = ({photos}) => {
    console.log(photos);
    return(
        <StyledWrapper>
            {photos.map((photo: string) => 
            <StyledImageContainer key={photo}>
                <img src={photo} alt="meal" />
            </StyledImageContainer>)}
        </StyledWrapper>
    );
};

export default Photos;