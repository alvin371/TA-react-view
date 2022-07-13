import { combineReducers } from "redux"
import authReducer  from './auth/reducer/authReducer'
import { postsState }  from "./posts/reducer/postsReducer";
import {classState} from "./classOnline/reducer/classReducer"



const reducer = combineReducers({
  Auth: authReducer,
  PostsState: postsState,
  ClassState:classState

})

export default reducer

