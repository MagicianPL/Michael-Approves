import React from 'react';
import { createContext, useState, ReactElement } from "react";
import { useFetchData } from '../helpers/useFetchData';

export const RestaurantsContext = createContext<any>([]);

interface Props {
    children: ReactElement;
}

const RestaurantsProvider: React.FC<Props> = ({children}) => {
    const apiUrl = "https://michael-approves-api.herokuapp.com/api/v1/restaurants";
    const [restaurants, setRestaurants] = useState([]);

    useFetchData(apiUrl, setRestaurants);

    return (
    <RestaurantsContext.Provider value={[restaurants, setRestaurants]}>
        {children}
    </RestaurantsContext.Provider>
    )
};

export default RestaurantsProvider;