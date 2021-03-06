import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";

import Home from "./views/pages/Home";
import Header from "./views/components/Header";


function Routes (props) {

    const {} = props;

    return (
        <Container>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Home}></Route>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;