import styled from 'styled-components';

const StyledMain = styled.main`
    margin-top: 25px;
    font-size: 32px;
    position: relative;

    p {
        text-align: center;
        font-weight: bold;
        margin-bottom: 40px;
        color: ${({theme}) => theme.colors.tertiary};
    }

    .desc {
        color: ${({theme}) => theme.colors.primary};
        text-align: left;
        font-weight: normal;
        padding-left: 70px;
        opacity: 0;
        transform: translateY(-30px);
        animation: appearing 1s forwards;
        
    }

    @keyframes appearing {
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export default StyledMain;