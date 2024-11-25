import React, { useContext } from 'react';
import { Admincontext } from './context/Admincontext';


function SomeComponent() {
    const { aToken, setAToken, backendUrl } = useContext(Admincontext);

    return (
        <div>
            <p>Backend URL: {backendUrl}</p>
            <button onClick={() => setAToken('newToken')}>Set Token</button>
        </div>
    );
}

export default SomeComponent;
