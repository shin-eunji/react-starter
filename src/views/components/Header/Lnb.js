import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";

function Lnb (props) {

    const {} = props;

    return (
        <Container>
            <Nav>
                <NavItem>쇼핑하기</NavItem>
                <NavItem>브랜드스토리</NavItem>
                <NavItem>리뷰</NavItem>
                <NavItem>고객센터</NavItem>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
`
const Nav = styled.div`
    display:flex;
    align-items:center;
    
`;
const NavItem = styled.div`
    font-size: ${pxToRem(18)};
    font-weight: 700;
    color: #f7f7f7;
`;
export default Lnb;