import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../contexts/RestaurantsContext';
import star from '../assets/star.png';

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    color: ${({theme}) => theme.colors.primary};

    h1 {
        font-size: 60px;
        font-weight: bold;
    }

    p {
        font-size: 55px;
    }

    img {
        width: 55px;
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
        <StyledHeader>
            <h1>{restaurant.name}</h1>
            <p>{`${restaurant.rating}/5`} <img src={star} alt="star" /></p>
        </StyledHeader>
        : null}
        {object === undefined ? <p>Cannot find restaurant</p> : null}
       </>
   );
};

export default RestaurantDetails;