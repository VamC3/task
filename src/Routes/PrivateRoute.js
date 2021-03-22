import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLogin = () => {
    console.log(JSON.parse(localStorage.getItem('isLogin')))
   return JSON.parse(localStorage.getItem('isLogin'));
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;