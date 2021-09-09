import axios from "axios";

const setNewsId = (items) => ({ type: 'SET_NEWS_ID', payload: items})
const setIsLoading = (isLoading) => ({ type: 'SET_IS_LOADING', payload: isLoading})
export const setIsRunning = (isRunning) => ({ type: 'SET_IS_RUNNING', payload: isRunning})

export const getNewsId = () => async (dispatch) => {
    try{
        setIsLoading(true)
        const resp = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100')
    
        dispatch(setNewsId(resp.data))
    }catch(error){
        console.error(error)
    }
} 