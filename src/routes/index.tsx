import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Home, NotFound } from '../pages/';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/notfound" exact component={NotFound} />
                <Redirect from="*" to="/notfound" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;