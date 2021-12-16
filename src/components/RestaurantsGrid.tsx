import React, { useState, useContext, useEffect } from 'react';
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
    gap: 30px;
    overflow-x: hidden;

    @media (max-width: 926px) {
        gap: 0;
    }

    @media (max-width: 880px) {
        grid-template-columns: 1fr 1fr;
        padding-top: 30px;
    }

    @media (max-width: 530px) {
        grid-template-columns: 1fr;
    }

    .loading {
        max-width: 100%;
        text-align: center;
        font-size: 45px;
        grid-column: 1/-1;
        animation: loading 4s infinite;
        overflow: hidden;
        color: ${({theme}) => theme.colors.primary};
    }

    @keyframes loading {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.3)
        }

        100% {
            transform: scale(1);
        }
    }
`;

const RestaurantsGrid = () => {

    //all initial restaurants from context and from db
    const restaurants: any = useContext(RestaurantsContext);

    //filtered
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
    //when I have data from database - useEffect n update
    useEffect(()=>{
        setFilteredRestaurants(restaurants)
    },[restaurants]);
    

    //SEARCHBAR COMPONENT
    const [searchedValue, setSearchedValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedValue(e.target.value);
    };

    //setState on input value (searchbar) - then creates filteredArray
    useEffect(()=>{
        const filteredArray = restaurants.filter((obj: any)=> obj.name.toLowerCase().includes(searchedValue.toLocaleLowerCase()));
       setFilteredRestaurants(filteredArray);
    }, [searchedValue, restaurants]);
    /*********************************** */

    return (
        <>
       <SearchBar value={searchedValue} onChange={handleInputChange} />
        <StyledRestaurantsGrid>
           { restaurants.length > 0 ?
           filteredRestaurants.map((obj: any) => {
               return (
                   <RestaurantItem data={obj} key={obj._id} />
               )
           })
        : <p className="loading">Please wait...</p>}
        </StyledRestaurantsGrid>
        </>
    )
};

export default RestaurantsGrid;