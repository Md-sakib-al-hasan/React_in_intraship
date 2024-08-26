import React, { createContext } from 'react';

const Context = createContext(null);

const Provider = ({children}) => {
    return (
        <Context.Provider value={"sakib"}>
            {children}
        </Context.Provider>
    );
};

export default Provider;