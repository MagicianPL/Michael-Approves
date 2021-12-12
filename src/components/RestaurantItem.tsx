import React, { useRef } from 'react';
import styled from 'styled-components';
import { useCurvedText } from '../helpers/useCurvedText';

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
        letter-spacing: 3px;
        font-weight: bold;
        font-size: 40px;
        height: 70px;
    }

    .circle {
        width: 100%;
        max-width: 300px;
        aspect-ratio: 1 / 1;
        border: 3px solid black;
        border-radius: 50%;
        position: relative;
        bottom: 21px;
        cursor: pointer;

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
        }

        &:hover::before {
            opacity: 0.3;
        }
    }
`;

const RestaurantItem: React.FC<any> = ({data}) => {
    const curvedText = useRef(null);

    useCurvedText(curvedText);

    return (
        <Wrapper bg={data.bgImage}>
            <h1 ref={curvedText}>{data.name}</h1>
            <div className="circle"></div>
        </Wrapper>
    )
};

export default RestaurantItem;