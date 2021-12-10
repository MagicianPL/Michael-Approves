import React, { useContext } from 'react';
import styled from 'styled-components';
import { RestaurantsContext } from '../contexts/RestaurantsContext';

const Wrapper = styled.div`
    width: 100%;
    max-width: 300px;
    aspect-ratio: 1 / 1;
    background: #342E3A;
    border-radius: 50%;
    border: 3px solid #B6A251;
   transition: all 0.5s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    &:hover {
        border: 3px solid #251D1F;
        background: #B6A251;
        color: #251D1F;
    }
`;

const RestaurantItem = () => {
    const value = useContext(RestaurantsContext);
    console.log(value);
    return (
        <Wrapper><h1>McDonald</h1></Wrapper>
    )
};

export default RestaurantItem;