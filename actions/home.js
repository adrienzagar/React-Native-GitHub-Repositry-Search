// Action Types
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const GET_REPOSITORIES = 'GET_REPOSITORIES';
export const SAVE_REPOSITORIES = 'SAVE_REPOSITORIES';
export const SET_ERROR = 'SET_ERROR'

// Action Creators
export const setInputValue = (inputValue) => ({
    type: SET_INPUT_VALUE,
    inputValue,
});

export const getRepositories = () => ({
    type: GET_REPOSITORIES,
});

export const saveRepositories = (repositories) => ({
    type : SAVE_REPOSITORIES,
    repositories,
})

export const setError = () => ({
    type: SET_ERROR,
})
