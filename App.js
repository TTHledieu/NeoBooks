// @flow

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from 'containers/views/Root'
import rootReducer from 'reduxConfig/reducers'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCHWKQNufFeypEG5WZ7L82gwj_Q8jD8Df0",
  authDomain: "neo-books-d20f3.firebaseapp.com",
  databaseURL: "https://neo-books-d20f3.firebaseio.com",
  projectId: "neo-books-d20f3",
  storageBucket: "neo-books-d20f3.appspot.com",
  messagingSenderId: "880214132121"
};

firebase.initializeApp(firebaseConfig);

const store = createStore(rootReducer)

export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
)
