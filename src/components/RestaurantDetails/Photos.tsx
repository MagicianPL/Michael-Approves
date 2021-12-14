import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    border: 1px solid red;
    min-height: 300px;
    display: flex;
    justify-content: space-around;
    transform: translateY(40px);
    opacity: 0;
    animation: appearing 0.7s forwards;

    @keyframes appearing {
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    img {
        width: 100%;
        max-width: 400px;
        image-position: center;
        display: block;
        transition: all 0.5s;

        &:hover {
            transform: scale(1.2);
        }
    }
`;

interface Props {
    photos: string[];
}

const Photos: React.FC<Props> = ({photos}) => {
    console.log(photos);
    return(
        <StyledWrapper>
            {photos.map((photo: string) => <img key={photo} src={photo} alt="meal" />)}
        </StyledWrapper>
    );
};

export default Photos;