import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../contexts/RestaurantsContext';


const RestaurantDetails: React.FC<any> = (props) => {
    const {id} = useParams();
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
        {restaurant ? <h1>{restaurant.name}</h1> : null}
       </>
   );
};

export default RestaurantDetails;