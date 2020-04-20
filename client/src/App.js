import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
  <div>

    <Switch>
      <Route path='/movies/:id'>
        <SavedList list={savedList}/>
        <Movie />
      </Route>

      <Route path='/'>
        <SavedList list={savedList}/>
        <MovieList />
      </Route>
    </Switch>
  </div>
);
};


export default App;

//
// // Inside your App file add two routes.
//  one route for / that loads the MovieList component.
//  one route that will take an id parameter after/movies/ (ex: /movies/2, /movies/3
// where the id is dynamic). This route should load the Movie component.
