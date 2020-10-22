import React from 'react'
import {render} from 'react-dom'
import {store} from './store';
import rootRoute from './routers';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import moment from 'moment';
moment.locale('zh-cn');


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory} routes={rootRoute}/>
            </Provider>
        )
    }
}

render(
    (
        <App/>
    ),
    document.getElementById('app')
);
