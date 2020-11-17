import React from 'react';
import styled from 'styled-components';

function Member (props) {

    const {} = props;

    return (
        <Container>
            <Item>로그인</Item>
            <Item>회원가입</Item>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
`
const Item = styled.div`
    
`;
export default Member;