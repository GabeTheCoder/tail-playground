
import React from 'react';
import { useAppState } from '../../contexts/AppState';
import Home from '../Home';

const App = props => {

    const { path } = useAppState();

    return (
        <div>
            {path === 'home' ? <Home /> : null}
        </div>
    );

};

export default App;
