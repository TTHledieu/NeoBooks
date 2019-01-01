// @flow

// State
export type User = {
  +id: number,
  +name: string,
}

// Actions
export type SetUser = {
  +type: 'SET_USER',
  +id: number,
  +name: string,
}

export type UnsetUser = {
  +type: 'UNSET_USER',
}

export type UserAction = SetUser | UnsetUser
