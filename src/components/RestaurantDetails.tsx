import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../contexts/RestaurantsContext';
import star from '../assets/star.png';
import StyledButton from './StyledButton';

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.colors.primary};

    h1 {
        font-size: 60px;
        font-weight: bold;
        padding-left: 100px;
        margin-right: 80px;
    }

    p {
        font-size: 55px;
        display: flex;
        align-items: center;
        gap: 15px;
    }

    img {
        width: 55px;
    }
`;

const StyledMain = styled.main`
    margin-top: 25px;
    font-size: 32px;
    position: relative;

    p {
        text-align: center;
        font-weight: bold;
        margin-bottom: 40px;
    }

    .desc {
        text-align: left;
        font-weight: normal;
        padding-left: 70px;
        opacity: 0;
        transform: translateY(-30px);
        animation: appearing 1s forwards;
        
    }

    @keyframes appearing {
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const RestaurantDetails: React.FC<any> = (props) => {
    const {id} = useParams();
    //choosed restaurant object
    const object = useContext(RestaurantsContext).filter((obj: any) => obj._id === id)[0];
    const[restaurant, setRestaurant] = useState<any | null>(null);

    useEffect(()=>{
        if (object === undefined) {
            setRestaurant("Cannot find restaurant")
        } else {
            setRestaurant(object);
        }
    }, [object]);

    useEffect(()=>{
        console.log(restaurant);
    }, [restaurant])

   return (
       <>
        {restaurant ?
            <>
            <StyledHeader>
            <h1>{restaurant.name}</h1>
            <p>{`${restaurant.rating}/5`} <img src={star} alt="star" /></p>
            <StyledButton imgBackground={restaurant.bgImage}>Write to us</StyledButton>
            </StyledHeader>
            <StyledMain>
                <p>{restaurant.type}</p>
                <p className="desc">{restaurant.description}</p>
            </StyledMain>
            </>
        
        : null}
        {object === undefined ? <p>Cannot find restaurant</p> : null}
       </>
   );
};

export default RestaurantDetails;