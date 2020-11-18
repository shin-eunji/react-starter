import React from 'react';
import styled from 'styled-components';
import Gnb from "./Gnb";
import Lnb from "./Lnb";

function Nav (props) {

    const {} = props;

    return (
        <Container>
            <Gnb/>
            <Lnb/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
`
export default Nav;