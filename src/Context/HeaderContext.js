import React, { useContext, useEffect, useState } from 'react';

const { createContext } = require("react");
const HeaderContext=createContext();

export const HeaderContextProvider = ({children}) => {
    const [cartIds,setCartIds] =useState([]);
    const [cartTotal,setCartTotal] = useState();
    const [cartPrice,setCartPrice] = useState();

    useEffect(()=>{
        const getCartIds = async()=>{
            setCartIds(JSON.parse(localStorage.getItem("provis"))||[]);
        }
    getCartIds();
    },[])
    
    useEffect(()=>{
        const getCartTotal =()=>{
            setCartTotal(cartIds.length);
        }
        getCartTotal();
    },[cartIds])
   
    const values={
        cartIds,
        setCartIds,
        cartTotal,
        setCartTotal,
        cartPrice,
        setCartPrice
    }

  return (<HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>)
}

export const useHeader = ()=> useContext(HeaderContext);