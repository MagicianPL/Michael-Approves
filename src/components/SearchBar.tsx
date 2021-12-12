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