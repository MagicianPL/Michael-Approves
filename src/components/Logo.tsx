import styled from 'styled-components';
import logo from '../assets/logo.png';

const Wrapper = styled.div`
        width: 130px;
        height: 130px;

        img {
            position: relative;
            bottom: 5px;
            right: 16px;
            opacity: 0;
            display: block;
            transform: scale(1.3);
            animation: 1s scale forwards;
            animation-delay: 1s;
        }

        @keyframes scale {
            100% {
                transform: scale(1);
                opacity: 1;
            }
`;

const Logo = () => {
    return (
        <Wrapper>
           <img src={logo} alt="logo" />
        </Wrapper>
    );
};

export default Logo;