import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section`
    width: 100%;
    padding: 30px;
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

        @media (max-width: 350px) {
            font-size: 25px;
        }

        @media (max-width: 300px) {
            font-size: 20px;
        }

        &:focus {
            border: 2px solid ${({theme}) => theme.colors.primary};
        }
    }
`;

interface Props {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const SearchBar: React.FC<Props> = ({value, onChange}) => {

    return(
        <Wrapper>
            <input value={value} onChange={onChange} type="text" placeholder='Search by name' />
        </Wrapper>
    );
};

export default SearchBar;