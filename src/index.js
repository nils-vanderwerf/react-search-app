import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {MoviesContextProvider} from './contexts/MoviesContext'
import {QueryContextProvider} from './contexts/QueryContext'
import {FavouritesContextProvider} from './contexts/FavouritesContext'



ReactDOM.render(
  <React.StrictMode>
    <QueryContextProvider>
      <MoviesContextProvider>
        <FavouritesContextProvider>
            <App />
        </FavouritesContextProvider>
      </MoviesContextProvider>
    </QueryContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);