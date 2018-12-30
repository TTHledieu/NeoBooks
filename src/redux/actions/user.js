// @flow

import type { SetUser, UnsetUser } from 'redux/actions/user.type'

export const setUser = ({ id, name }): SetUser => ({
  type: 'SET_USER',
  id,
  name,
})

export const unsetUser = (): UnsetUser => ({
  type: 'UNSET_USER',
})
