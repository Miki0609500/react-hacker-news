const initialState = {
    newsData: {},
    isLoading: true
}


const news = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DATA_NEWS':
            return {
                ...state,
                newsData: {...action.payload},
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


export default news