import reducer from './reducer';
import React, { createContext, useContext, useReducer } from 'react';
// Prepares the dataLayer
import { initialState } from './reducer';
export const StateContext = createContext(initialState); // this initial just apply for any component want to use the context without the wrapper
// Wrap our app and provide the Data layer
export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
