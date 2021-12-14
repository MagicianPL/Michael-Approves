import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../../contexts/RestaurantsContext';
import StyledHeader from './StyledHeader';
import StyledMain from './StyledMain';
import star from '../..//assets/star.png';
import StyledButton from '../StyledButton';
import Photos from './Photos';

const RestaurantDetails: React.FC<any> = (props) => {
    const {id} = useParams();
    
    const[restaurant, setRestaurant] = useState<any | null>(null);

    const restaurants = useContext(RestaurantsContext);

    useEffect(()=>{
        if(restaurants.length > 0) {
        //choosed restaurant object
        const choosedRestaurant = restaurants.filter((obj: any) => obj._id === id)[0];
        setRestaurant(choosedRestaurant);
        }
    }, [restaurants, id]);


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
               <Photos photos={restaurant.images.urls} />
            </StyledMain>
            </>
        : null}
    </>
   );
};

export default RestaurantDetails;