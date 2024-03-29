import React from 'react';
import { createContext, useState, ReactElement } from "react";
import { useFetchData } from '../helpers/useFetchData';

export const RestaurantsContext = createContext<any>([]);

interface Props {
    children: ReactElement;
}

const RestaurantsProvider: React.FC<Props> = ({children}) => {
    const apiUrl = "https://easy-gray-salmon-robe.cyclic.app/api/v1/restaurants";
    const [restaurants, setRestaurants] = useState([]);

    useFetchData(apiUrl, setRestaurants);
    return (
    <RestaurantsContext.Provider value={restaurants}>
        {children}
    </RestaurantsContext.Provider>
    )
};

export default RestaurantsProvider;
