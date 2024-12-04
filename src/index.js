import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {sendToVercelAnalytics} from './vitals';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

/*ReactDOM.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);*/

ReactDOM.render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>,
    document.getElementById("root")
);
