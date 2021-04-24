import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {MoviesContextProvider} from './contexts/MoviesContext'
import {QueryContextProvider} from './contexts/QueryContext'
import {FavouritesContextProvider} from './contexts/FavouritesContext'
import {WatchedContextProvider} from './contexts/WatchedContext'
import {WatchListContextProvider} from './contexts/WatchListContext'



ReactDOM.render(
  <React.StrictMode>
    <QueryContextProvider>
      <MoviesContextProvider>
        <FavouritesContextProvider>
          <WatchListContextProvider>
          <WatchedContextProvider>
            <App />
          </WatchedContextProvider>
          </WatchListContextProvider>
        </FavouritesContextProvider>
      </MoviesContextProvider>
    </QueryContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);