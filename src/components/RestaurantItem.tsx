import React, { useRef } from 'react';
import styled from 'styled-components';
import { useCurvedText } from '../helpers/useCurvedText';
import { Link } from 'react-router-dom';

interface Props {
    bg: string,
}

const Wrapper = styled.div<Props>`
    width: 100%;
    max-width: 310px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;

    h1 {
        letter-spacing: 6px;
        font-weight: bold;
        font-size: 40px;
        height: 70px;
        color: ${({theme}) => theme.colors.primary};

        @media (max-width: 1200px) {
            font-size: 30px;
        }

        @media (max-width: 1100px) {
            leter-spacing: 3px;
        }

        @media (max-width: 1024px) {
            font-size: 26px;
        }

        @media (max-width: 620px) {
            letter-spacing: 2px;
            height: 58px;
        }

        @media (max-width: 530px) {
            letter-spacing: 3px;
            font-size: 35px;
            height: 70px;
        }

        @media (max-width: 355px) {
            font-size: 30px;
            letter-spacing: 3px;
        }

        @media (max-width: 310px) {
            font-size: 25px;
            letter-spacing: 3px;
            height: 57px;
        }
    }

    .circle {
        width: 100%;
        max-width: 320px;
        aspect-ratio: 1 / 1;
        border: 6px solid ${({theme}) => theme.colors.tertiary};
        border-radius: 50%;
        position: relative;
        bottom: 21px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        color: ${({theme}) => theme.colors.primary};
        transition: border 0.4s;

        @media (max-width: 1150px) {
            max-width: 265px;
        }

        @media (max-width: 1024px) {
            max-width: 230px;
        }

        @media (max-width: 530px) {
            max-width: 255px;
        }

        &:hover {
            border: 6px solid ${({theme}) => theme.colors.primary};
        }

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background-image: url("${props => props.bg}");
            background-size: cover;
            background-position: center;
            opacity: 0.6;
            transition: all 0.4s;
            z-index: -1;
        }

        &:hover::before {
            opacity: 0.3;
        }

        &:hover p {
            opacity: 1;
        }

        p {
            font-size: 50px;
            opacity: 0;
            transition: all 1s;
        }
    }
`;

const StyledLink = styled(Link)`
    width: 100%;
    text-decoration: none;
`;

const RestaurantItem: React.FC<any> = ({data}) => {
    const curvedText = useRef(null);

    useCurvedText(curvedText);

    return (
        <Wrapper bg={data.bgImage}>
            <h1 ref={curvedText}>{data.name}</h1>
            <StyledLink to={`/${data._id}`}>
            <div className="circle">
                <p>{data.type}</p>
            </div>
            </StyledLink>
        </Wrapper>
    )
};

export default RestaurantItem;