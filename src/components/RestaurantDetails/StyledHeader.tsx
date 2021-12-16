import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.colors.primary};

    @media (max-width: 1250px) {
        justify-content: space-around;
    }

    @media (max-width: 830px) {
        flex-direction: column;
        gap: 25px;
    }

    h1 {
        font-size: 60px;
        font-weight: bold;
        padding-left: 100px;
        margin-right: 80px;
        text-align: center;

        @media (max-width: 1250px) {
            margin: 0;
            padding: 0;
        }

        @media (max-width: 390px) {
            font-size: 55px;
        }

        @media (max-width: 340px) {
            font-size: 50px;
            text-align: center;
        }
    }

    p {
        font-size: 55px;
        display: flex;
        align-items: center;
        gap: 15px;
    }

    img {
        width: 55px;
    }

    a {
        text-decoration: none;

        @media (max-width: 1250px) {
            margin: 0;
        }
    }
`;

export default StyledHeader;