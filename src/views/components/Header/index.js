import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {pxToRem} from "../../../common/Text/Text.Styled";
import Nav from "./Nav";

function Header (props) {

    const {} = props;

    return (
        <Container>
            <Logo>정육각</Logo>
            <Nav/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
    height: ${pxToRem(130)};
    background: #111;
  
`
const Logo = styled.h1`
    color: #fff;
    font-size: ${pxToRem(30)};
`;
export default withRouter(Header);