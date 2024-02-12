
import React, { useState, useEffect } from 'react';
import { useAppState } from '../../contexts/AppState';

const Home = props => {

    const [list, setList] = useState([]);

    const { performWithAlert } = useAppState();

    const fetch = () => {
        performWithAlert(async () => {
            // const result = await api.list();
            setList([]);
        });
    };

    useEffect(() => { fetch() }, []); // TODO: use auth once sign in implemented

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    );

};

export default Home;
