import React, {createContext, useState} from "react"
const WatchListContext = createContext()

const WatchListContextProvider = (props) => {
    const [watchlist, setWatchList] = useState([])
    
    return (
        <WatchListContext.Provider value={[watchlist, setWatchList]}>
            {props.children}
        </WatchListContext.Provider>
    )
    
}

export {WatchListContext, WatchListContextProvider};
