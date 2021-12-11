import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
// @ts-ignore
import CircleType from "circletype";
import { RestaurantsContext } from '../contexts/RestaurantsContext';

const Wrapper = styled.div`
    width: 100%;
    max-width: 310px;
    aspect-ratio: 1 / 1;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        letter-spacing: 3px;
        font-weight: bold;
        font-size: 40px;
    }

    .circle {
        width: 100%;
        max-width: 300px;
        aspect-ratio: 1 / 1;
        border: 3px solid black;
        border-radius: 50%;
        position: relative;
        bottom: 21px;
    }
`;

const RestaurantItem = () => {
    const value = useContext(RestaurantsContext);
    console.log(value);

    const curvedText = useRef(null);

    useEffect(()=>{
        console.log(curvedText.current)
        const circleType = new CircleType(curvedText.current);
circleType.radius(250).dir(1);
        
    }, [])

    return (
        <Wrapper>
            <h1 ref={curvedText}>Angel's Wings</h1>
            <div className="circle"></div>
        </Wrapper>
    )
};

export default RestaurantItem;