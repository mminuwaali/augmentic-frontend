import React from 'react';
import routes from './routes';
import * as Browser from 'react-router-dom';

export default () => {
    return <>
        <Browser.BrowserRouter>
            <Browser.Routes>
                {routes.map((route, id) => <Browser.Route {...route} element={<route.element />} key={id} />)}
            </Browser.Routes>
        </Browser.BrowserRouter>
    </>;
};
