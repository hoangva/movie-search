import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import NeedInclude from './components/NeedInclude';
import NeedUpload from './components/NeedUpload';
import WrongExtension from './components/WrongExtension';
import WrongName from './components/WrongName';
import WrongPath from './components/WrongPath';

import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/page/external">Home</Link>
                </li>
                <li>
                    <Link to="/page/external/need-include">Need Include</Link>
                </li>
                <li>
                    <Link to="/page/external/need-upload">Need Upload</Link>
                </li>
                <li>
                    <Link to="/page/external/wrong-name">Wrong Name</Link>
                </li>
                <li>
                    <Link to="/page/external/wrong-path">Wrong Path</Link>
                </li>
                <li>
                    <Link to="/page/external/wrong-extension">Wrong Extension</Link>
                </li>
            </ul>
            <Route exact path="/page/external" component={App} />
            <Route exact path="/page/external/need-include" component={NeedInclude} />
            <Route exact path="/page/external/need-upload" component={NeedUpload} />
            <Route exact path="/page/external/wrong-name" component={WrongName} />
            <Route exact path="/page/external/wrong-path" component={WrongPath} />
            <Route exact path="/page/external/wrong-extension" component={WrongExtension} />
        </div>
    </Router>
)

ReactDOM.hydrate(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
