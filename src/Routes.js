import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Cartas from './pages/Cartas';
import FormPage from './pages/FormPage';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/cartas" exact component={Cartas} />
                <Route path="/form" exact component={FormPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
