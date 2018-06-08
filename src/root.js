import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'reducers/index';

//const initialState = {};

export default ({children, initialState = {}}) => {
    return (
        <Provider store={createStore(rootReducer, initialState)}>
            {children}
        </Provider>
    );
};