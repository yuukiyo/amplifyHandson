import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Actions } from './action'

export interface State {
    username: string,
}

const initialState: State = {
    username: '',
}

export const Reducers = reducerWithInitialState(initialState)
    .case(Actions.updateUserName, (state, username) => {
        return Object.assign({}, state, { username })
    })