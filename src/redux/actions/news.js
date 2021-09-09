import axios from "axios";

const setDataNews = (items) => ({ type: 'SET_DATA_NEWS', payload: items})
const setIsLoading = (isLoading) => ({ type: 'SET_IS_LOADING', payload: isLoading})

export const getDataNews = (id) => async (dispatch) => {
    try{
        dispatch(setIsLoading(true))
        const newsData = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        dispatch(setDataNews(newsData.data))
    }catch(error){
        console.error(error)
    }
} 