import API_ROUTE from "../../../../apiRoute";
import axios from 'axios'
import {CREATE_CLASS_SUCCESS,CREATE_CLASS_ERROR,FETCH_CLASS,FETCH_CLASS_ERROR,BEFORE_STATE_CLASS,GET_CLASS_SUCCESS,DELETE_CLASS_SUCCESS,DELETE_CLASS_ERROR} from "../classTypes"
import  {history} from '../../../../history'


export const fetchPostsOnline = () => {



  return async (dispatch) => {

    dispatch({ type: BEFORE_STATE_CLASS })

    try {
      const res  = await axios.get(`${API_ROUTE}/online-class`)
      // console.log("these are the post: ", res.data.response)
      dispatch({ type: FETCH_CLASS, payload: res.data })
    } catch(err){
      dispatch({ type: FETCH_CLASS_ERROR, payload: err.response ? err.respons.data.error : "" })
    }
  }
}

export const fetchPostsOffline = () => {



    return async (dispatch) => {
  
      dispatch({ type: BEFORE_STATE_CLASS })
  
      try {
        const res  = await axios.get(`${API_ROUTE}/offline-class`)
        console.log("these are the post: ")
        console.log(res.data)
        dispatch({ type: FETCH_CLASS, payload: res.data })
      } catch(err){
        dispatch({ type: FETCH_CLASS_ERROR, payload: err.response ? err.respons.data.error : "" })
      }
    }
  }
// export const fetchPost = id => {

//   return async (dispatch) => {

//     dispatch({ type: BEFORE_STATE_CLASS })

//     try {
//       const res  = await axios.get(`${API_ROUTE}/posts/${id}`)
//       dispatch({ type: GET_POST_SUCCESS, payload: res.data.response })
//     } catch(err){
//       dispatch({ type: GET_POST_ERROR, payload: err.response.data.error })
//       history.push('/'); //incase the user manually enter the param that dont exist
//     }
//   }
// }

// export const fetchAuthPosts = id => {

//   return async (dispatch) => {

//     dispatch({ type: BEFORE_STATE_POST })

//     try {
//       const res  = await axios.get(`${API_ROUTE}/user_posts/${id}`)
//       dispatch({ type: FETCH_AUTH_POSTS, payload: res.data.response })
//     } catch(err){
//       dispatch({ type: FETCH_AUTH_POSTS_ERROR, payload: err.response.data.error })
//     }
//   }
// }

export const createPostOnline = (createPost) => {
  return async (dispatch) => {

    dispatch({ type: BEFORE_STATE_CLASS })

    try {
      const res = await axios.post(`${API_ROUTE}/online-class/create`, createPost)
      dispatch({ 
        type: CREATE_CLASS_SUCCESS,  
        payload: res.data.response
      })
      history.push('/');
    } catch(err) {
      dispatch({ type: CREATE_CLASS_ERROR, payload: err.response.data.error })
    }
  }
}

export const createPostOffline = (createPost) => {
    return async (dispatch) => {
  
      dispatch({ type: BEFORE_STATE_CLASS })
  
      try {
        const res = await axios.post(`${API_ROUTE}/offline-class/create`, createPost)
        dispatch({ 
          type: CREATE_CLASS_SUCCESS,  
          payload: res.data.response
        })
        history.push('/');
      } catch(err) {
        dispatch({ type: CREATE_CLASS_ERROR, payload: err.response.data.error })
      }
    }
  }

// export const updatePost = (updateDetails, updateSuccess) => {

//   return async (dispatch) => {

//     dispatch({ type: BEFORE_STATE_POST })

//     try {
//       const res = await axios.put(`${API_ROUTE}/posts/${updateDetails.id}`, updateDetails)
//       dispatch({ 
//         type: UPDATE_POST_SUCCESS,
//         payload: res.data.response
//       })
//       updateSuccess()
//     } catch(err) {
//       dispatch({ type: UPDATE_POST_ERROR, payload: err.response.data.error })
//     }
//   }
// }

export const deletePostOnline = (id) => {

  return async (dispatch) => {

    dispatch({ type: BEFORE_STATE_CLASS })

    try {
      const res = await axios.delete(`${API_ROUTE}/online-class/delete/${id}`)
      dispatch({ 
        type: DELETE_CLASS_SUCCESS,
        payload: {
          deletedID: id,
          message: res.data.response
        } 
      })
      history.push('/');
    } catch(err) {
      dispatch({ type: DELETE_CLASS_ERROR, payload: err.response.data.error })
    }
  }
}

export const deletePostOffline = (id) => {

    return async (dispatch) => {
  
      dispatch({ type: BEFORE_STATE_CLASS })
  
      try {
        const res = await axios.delete(`${API_ROUTE}/offline-class/delete/${id}`)
        dispatch({ 
          type: DELETE_CLASS_SUCCESS,
          payload: {
            deletedID: id,
            message: res.data.response
          } 
        })
        history.push('/');
      } catch(err) {
        dispatch({ type: DELETE_CLASS_ERROR, payload: err.response.data.error })
      }
    }
  }
