// @flow

import type { User, UserAction } from 'reduxConfig/actions/user.type'

const initialState: User = {
  id: -1,
  name: '',
}

const user = (state: User = initialState, action: UserAction) => {
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
