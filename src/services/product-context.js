import { createContext, useState } from "react";

export const ProduitContext = createContext();
export const PrixMinimumContext = createContext();
export const PrixMaximumContext = createContext();
export const TotalProduitsContext = createContext();

export const useProduitState =()=>{
    const state = useState([])
    return state;
}

export const useMinState = () => {
  const appState = useState(0);
  return appState;
};


export const useMaxState = () => {
  const appState = useState(1000);
  return appState;
};

export const useTotalState = () => {
  const appState = useState(12);
  return appState;
};