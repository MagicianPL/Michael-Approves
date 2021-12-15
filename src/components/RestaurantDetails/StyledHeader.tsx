import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.colors.primary};

    h1 {
        font-size: 60px;
        font-weight: bold;
        padding-left: 100px;
        margin-right: 80px;
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
    }
`;

export default StyledHeader;