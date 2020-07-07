import actionCreatorFactory, { } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const Actions = {
    updateUserName: actionCreator<number>('UPDATE_USERNAME'),
}