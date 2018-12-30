// @flow

import type { User } from 'redux/actions/user.type'

const initialState: User = {
  id: null,
  name: null,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        id: action.id,
        name: action.name,
      }
    case 'UNSET_USER':
      return initialState
    default:
      return state
  }
}

export default user
