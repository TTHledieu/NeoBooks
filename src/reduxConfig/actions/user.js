// @flow

import type { User, SetUser, UnsetUser } from 'reduxConfig/actions/user.type'

export const setUser = ({ id, name }: User): SetUser => ({
  type: 'SET_USER',
  id,
  name,
})

export const unsetUser = (): UnsetUser => ({
  type: 'UNSET_USER',
})
