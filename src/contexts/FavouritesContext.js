import React, {createContext, useState} from "react"
const FavouritesContext = createContext()

const FavouritesContextProvider = (props) => {
    const [favourites, setFavourites] = useState([])
    
    return (
        <FavouritesContext.Provider 
            value={[favourites, setFavourites]}>
                {props.children}
        </FavouritesContext.Provider>
    )
    
}

export {FavouritesContext, FavouritesContextProvider};
