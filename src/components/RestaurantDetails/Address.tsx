import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
    width: 100%;
    min-height: 300px;
    border: 1px solid red;
    margin-top: 30px;

    p {
        color: ${({theme}) => theme.colors.primary};
        margin: 15px 0;
    }
`;

const Address: React.FC<any> = ({contact: {address, email, phone}}) => {

    return(
        <StyledWrapper>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
        </StyledWrapper>
    );
};


export default Address;