import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import RegisterPlayer from '../components/pages/RegisterPlayer';
import Main from '../components/pages/Main';
import NotFound from '../components/pages/NotFound';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Main} exact={true} />
            <Route path="/register" component={RegisterPlayer} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default AppRouter;