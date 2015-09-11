import React, {Component} from 'react/addons';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import {DevTools, DebugPanel} from 'redux-devtools/lib/react';
import * as store from 'stores';
import routes from '../routes';

import DiffMonitor from 'redux-devtools-diff-monitor';

/* eslint-disable */
function renderDevTools() {
    if (__DEBUG__) {
        return (
            <DebugPanel top right
                bottom key="debugPanel">
              <DevTools store={store} monitor={DiffMonitor} />
            </DebugPanel>
      );
    }
}
/* eslint-enable */

export default class Root extends Component {
    displayName = 'Root component'
    render() {
        const {history} = this.props;
        return (
            <div>
                <Provider store={store}>
                    {() =>
                        <Router history={history}>
                            {routes}
                        </Router>}
                </Provider>
                {renderDevTools()}
            </div>
        );
    }
}
