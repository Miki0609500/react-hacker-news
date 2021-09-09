const initialState = {
    items: [],
    isRunningInterval: false,
    isLoading: true
}


const newsId = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NEWS_ID':
            return {
                ...state,
                items: [...action.payload],
                isLoading: false
            }
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        case 'SET_IS_RUNNING':
            return {
                ...state,
                isRunningInterval: action.payload
            }
        default:
            return state
    }
}


export default newsId