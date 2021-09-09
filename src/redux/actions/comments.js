import axios from 'axios'

export const setComments = (comment) => ({ type: 'SET_COMMENTS', payload: comment })
export const setIsLoading = (isLoading) => ({ type: 'SET_IS_LOADING', payload: isLoading })

const getAllComment = async (ids) => {
    try {
            setIsLoading(true)
            const res = await Promise.all(ids.map(async id => {
                const { data } = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)

                if(data.kids){
                    const comment = await getAllComment(data.kids)
                    data.children = comment
                }
                return data
            }))
            return res
    }catch(error){
        console.log(error)
    }
}


export const getComments = (commentsId) => async (dispatch) => {
    if(commentsId){
        const data = await getAllComment(commentsId)
        dispatch(setComments(data))
    }else {
        dispatch(setComments([]))
    }
} 