import React, { useState, useContext } from 'react';
import RestaurantItem from './RestaurantItem';
import styled from 'styled-components';
import { RestaurantsContext } from '../contexts/RestaurantsContext';
import SearchBar from './SearchBar';

const StyledRestaurantsGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
`;

const RestaurantsGrid = () => {

    //all initial restaurants from db
    const restaurants: any = useContext(RestaurantsContext);
    //filtered
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

    //SEARCHBAR COMPONENT
    const [searchedValue, setSearchedValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedValue(e.target.value);
    };
    /*********************************** */

    return (
        <>
        <SearchBar value={searchedValue} onChange={handleInputChange} />
        <StyledRestaurantsGrid>
           {filteredRestaurants.map((obj: any) => {
               return (
                   <RestaurantItem data={obj} key={obj._id} />
               )
           })}
        </StyledRestaurantsGrid>
        </>
    )
};

export default RestaurantsGrid;