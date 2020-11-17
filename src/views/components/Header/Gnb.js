import React from 'react';
import styled from 'styled-components';
import Member from "./Member";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Gnb (props) {

    const {} = props;

    return (
        <Container>
            <Nav>
                <NavItem>이벤트</NavItem>
                <NavItem>공지사항</NavItem>
                <NavItem>이용가이드</NavItem>
            </Nav>

            <Member/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    color: #737373;
    font-size: ${pxToRem(14)};
    font-weight: 400;
    margin-bottom: ${pxToRem(20)};
`
const Nav = styled.nav`
    display:flex;
    align-items:center;
`;
const NavItem = styled.div`
    
`;
export default Gnb;