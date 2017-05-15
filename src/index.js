import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import Component_1 from 'components/Component_1';
import Component_2 from 'components/Component_2';
import store, { history } from 'store';

import 'styles/index.styl';


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path='/' component={Component_1} />
                <Route path='/some-path' component={Component_2} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);