// @flow

// State
export type User = {
  +id: string,
  +name: string,
}

// Actions
export type SetUser = {
  +type: 'SET_USER',
  +id: string,
  +name: string,
}

export type UnsetUser = {
  +type: 'UNSET_USER',
}

export type UserAction = SetUser | UnsetUser
