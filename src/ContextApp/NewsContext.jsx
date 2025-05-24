import React from 'react'
import { createContext, useContext, useState } from 'react'
import LoadingBar from "react-top-loading-bar";

const NewsContext = createContext();
export const NewsProvider = ({children})=>{
    const [newsStore,setNewsStore]= useState({});
    const [progress,setProgress]=useState(10);
 const Load=()=>{ return( <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />)}
    return(
        <NewsContext.Provider value={{newsStore,setNewsStore,progress,setProgress,Load}}>{children}</NewsContext.Provider>
    );
} ;
export const useNews =()=> useContext(NewsContext);