
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppState = props => {

    const [user, setUser] = useState(null);

    // very basic routing, as app gets more complex look into legit routing
    const [path, setPath] = useState('home');
    
    // super basic helpers for handling errors with alerts
    const [alert, setAlert] = useState(null);
    
    const performWithAlert = async func => {
        try {
            const result = await func();
            return result;
        } catch (e) {
            setAlert(e.message || 'An unknown error has occurred');
        }
    };

    const value = {
        user,
        setUser,
        path,
        setPath,
        alert,
        setAlert,
        performWithAlert
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );

};

export default AppState;

export const useAppState = () => useContext(AppContext);
