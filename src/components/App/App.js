import './App.css';
import React from 'react';
// import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
// import Movies from '../Movies/Movies';
// import SavedMovies from '../SavedMovies/SavedMovies';
// import Profile from '../Profile/Profile';
// import Signin from '../Signin/Signin';
// import Signup from '../Signup/Signup';

import './App.css';

function App() {
  return (
    <body className="page">
      <Header />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>

      <Footer />
      {/*
        <Route path="/movies">
          <Movies />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

      

      */}

    </body>
  );
}

export default App;
