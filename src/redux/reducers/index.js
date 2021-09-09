import { combineReducers } from "redux";

import news from './news'
import newsId from './newsId'
import comments from './comments'




const rootReducer = combineReducers({
    news,
    newsId,
    comments
})

export default rootReducer