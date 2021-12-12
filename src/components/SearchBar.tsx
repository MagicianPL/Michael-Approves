import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section`
    width: 100%;
    padding: 30px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        width: 100%;
        max-width: 400px;
        font-size: 30px;
        padding: 10px 6px;
        border: 2px solid ${({theme}) => theme.colors.tertiary};
        border-radius: 4px;
        color: ${({theme}) => theme.colors.primary};

        &:focus {
            border: 2px solid ${({theme}) => theme.colors.primary};
        }
    }
`;

const SearchBar = () => {
    return(
        <Wrapper>
            <input type="text" placeholder='Search by name' />
        </Wrapper>
    );
};

export default SearchBar;