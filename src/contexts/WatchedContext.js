import React, {createContext, useState} from "react"
const WatchedContext = createContext()

const WatchedContextProvider = (props) => {
    const [watched, setWatched] = useState([])
    
    return (
        <WatchedContext.Provider value={[watched, setWatched]}>
            {props.children}
        </WatchedContext.Provider>
    )
    
}

export {WatchedContext, WatchedContextProvider};
