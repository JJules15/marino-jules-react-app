import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {sendToVercelAnalytics} from './vitals';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {SpeedInsights} from "@vercel/speed-insights/react";
import {Analytics} from "@vercel/analytics/react";

ReactDOM.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
            <SpeedInsights/>
            <Analytics/>
        </DevSupport>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals(sendToVercelAnalytics);