import React, {createContext, useState} from "react"
const WatchListContext = createContext()

const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState([])
    
    return (
        <WatchListContext.Provider value={[watchList, setWatchList]}>
            {props.children}
        </WatchListContext.Provider>
    )
    
}

export {WatchListContext, WatchListContextProvider};
