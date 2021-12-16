import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaAt, FaHome } from 'react-icons/fa';

const StyledWrapper = styled.section`
    width: 100%;
    margin-top: 30px;

    h1 {
        font-size: 32px;
        text-align: center;
        color: ${({theme}) => theme.colors.tertiary};
    }

    p {
        color: ${({theme}) => theme.colors.primary};
        margin: 15px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;

        @media (max-width: 497px) {
            justify-content: start;
            text-align: left;
        }

        @media (max-width: 430px) {
            font-size: 25px;
        }

        @media (max-width: 350px) {
            flex-direction: column;
            gap: 15px;
            margin-bottom: 25px;
            text-align: center;
        }
    }
`;

const Address: React.FC<any> = ({contact: {address, email, phone}}) => {

    const wrapper = useRef(null);

    return(
        <StyledWrapper ref={wrapper}>
            <h1>FIND US</h1>
            <p><FaPhoneAlt /> {phone}</p>
            <p><FaAt /> {email}</p>
            <p><FaHome /> {address}</p>
        </StyledWrapper>
    );
};


export default Address;