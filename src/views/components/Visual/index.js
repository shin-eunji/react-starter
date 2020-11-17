import React from 'react';
import styled from 'styled-components';
import {Images} from "../../../images";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Visual (props) {

    const {} = props;

    return (
        <Container>
            <img src={Images.visual} alt="visual"/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: ${pxToRem(250)};
    img {
        width: 100%;
    }
`
export default Visual;