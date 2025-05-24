import React from 'react'
import {useNews} from '../ContextApp/NewsContext'
import LoadingBar from "react-top-loading-bar";

function Load() {
    const{progress,setProgress}=useNews(0);
  return (
    <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
  )
}

export default Load
