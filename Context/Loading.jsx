import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Loading = () => {
    const {user, loading} = useContext(AuthContext);
    if(loading && !user ){

        return <span className="loading loading-infinity loading-lg"></span>

    }else{
        return null
    }
   

      
};

export default Loading;