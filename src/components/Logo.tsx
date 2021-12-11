import styled from 'styled-components';

const Wrapper = styled.div`
        width: 130px;
        height: 130px;
        background: ${({theme}) => theme.colors.primary};
        border-radius: 50%;
`;

const Logo = () => {
    return (
        <Wrapper>

        </Wrapper>
    );
};

export default Logo;