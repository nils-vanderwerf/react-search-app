import React, {createContext, useState} from "react"
const QueryContext = createContext()

const QueryContextProvider = (props) => {
    const [query, setQuery] = useState('')
    
    return (
        <QueryContext.Provider value={[query, setQuery]}>
            {props.children}
        </QueryContext.Provider>
    )
    
}

export {QueryContext, QueryContextProvider};
