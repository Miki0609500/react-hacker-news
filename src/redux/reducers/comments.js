const initialState = {
    comments: [],
    isLoading: true
}

const components = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_COMMENTS':
            return {
                ...state,
                comments: [...action.payload],
                isLoading: false
            }
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}


export default components