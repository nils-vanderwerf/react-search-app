import React, {createContext, useState} from "react"
const [query, setQuery] = useState('')
const QueryContext = createContext(query)
export default QueryContext