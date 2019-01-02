// @flow

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from './src/containers/Views/Root'
import rootReducer from 'reduxConfig/reducers'

const store = createStore(rootReducer)

export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
)
