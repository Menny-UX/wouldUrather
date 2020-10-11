import React from 'react';
import { Route , Redirect } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const PrivateRoute = ({component: Component, auth , ...rest}) => {
    let location = useLocation();

        return ( 
            <Route {...rest} render={({props}) => auth
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: {from : location }
                }}/>
            } />
         )

}

export default PrivateRoute;