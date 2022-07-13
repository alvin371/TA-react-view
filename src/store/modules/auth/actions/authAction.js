// import API_ROUTE from "../../../../apiRoute";
import axios from 'axios'
import setAuthorizationToken  from "../../../../authorization/authorization";
// import { BEFORE_STATE, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, UPDATE_USER_AVATAR, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_AVATAR_ERROR, BEFORE_AVATAR_STATE, BEFORE_USER_STATE, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR, DELETE_USER_SUCCESS, DELETE_USER_ERROR } from '../authTypes'
import  {history} from '../../../../history'
// import { BEFORE_STATE, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, UPDATE_USER_AVATAR, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_AVATAR_ERROR, BEFORE_AVATAR_STATE, BEFORE_USER_STATE, DELETE_USER_SUCCESS, DELETE_USER_ERROR } from '../authTypes'
import { BEFORE_STATE, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, BEFORE_USER_STATE, DELETE_USER_SUCCESS, DELETE_USER_ERROR } from '../authTypes'

const API_ROUTE="http://localhost:8005"
export const SignIn = (credentials) => {
  console.log("cek user"+credentials.username)
  console.log("cek password"+credentials.password)
  return async (dispatch) => {
      dispatch({ type: BEFORE_STATE }) 
      
    try {
      const res = await axios.post(`${API_ROUTE}/user/login`, credentials)
      // console.log("credential"+credentials)
      // let userData = res.data.response
      let userData = res.data
      // alert("cek"+userData)
      // alert("cek"+res)
      localStorage.setItem("token", userData.data.setItemtoken)
      localStorage.setItem('user_data', JSON.stringify(userData.data));
      setAuthorizationToken(userData.token)
      alert("Happy Suffering Our Website")
      // console.log("test"+userData)
      // console.log("value"+userData.token)
      dispatch({ type: LOGIN_SUCCESS, payload: userData })
    } catch(err) {
      alert(err)
      dispatch({ type: LOGIN_ERROR, payload: err.response.message })
    }
  }
}

export const SignOut = () => {
  return (dispatch) => {
    localStorage.removeItem("token")
    setAuthorizationToken(false)
    dispatch({ type: LOGOUT_SUCCESS })
    window.localStorage.clear(); //update the localstorage
    history.push('/sign-in');
  }
}

export const SignUp = (newUser) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE }) 
      try {
        await axios.post(`${API_ROUTE}/user/register`, newUser);
        dispatch({ type: SIGNUP_SUCCESS})
        history.push('/sign-in');
      } catch(err) {
        alert(err)
        console.log(err)
        dispatch({ type: SIGNUP_ERROR, payload: err })
    }
  }
}

// export const updateUserAvatar = (updateUserAvatar) => {
//   return async (dispatch, getState) => {
//     dispatch({ type: BEFORE_AVATAR_STATE })
//     const { id } = getState().Auth.currentUser
//     try {
//       const res = await axios.put(`${API_ROUTE}/avatar/users/${id}`, updateUserAvatar, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         },
//       });
//       let updatedUser = res.data.response
//       window.localStorage.setItem('user_data', JSON.stringify(updatedUser)); //update the localstorage
//       dispatch({ type: UPDATE_USER_AVATAR, payload: updatedUser })
//     } catch (err) {
//       dispatch({ type: UPDATE_USER_AVATAR_ERROR, payload: err.response.data.error })
//     }
//   }
// }

// export const updateUser = (updateUser, clearInput) => {

//   return async (dispatch, getState) => {
//     dispatch({ type: BEFORE_USER_STATE })
//     const { currentUser } = getState().Auth
//     console.log("id")
//     console.log(currentUser.data.id)
//     try {
      
//       const res = await axios.put(`${API_ROUTE}/user/${currentUser.data.id}`, updateUser);
//       let updateUser = res.data.response
//       console.log("its been updated" )
//       console.log(updateUser)
//       dispatch({ type: UPDATE_USER_SUCCESS, payload: updateUser })
//       window.localStorage.setItem('user_data', JSON.stringify(updateUser)); //update the localstorages
//       clearInput()
//     } catch (err) {
//       alert(err)
//       dispatch({ type: UPDATE_USER_ERROR, payload:err.response })
//     }
//   }
// }

export const updateUser = (updateUser, clearInput) => {

  return async (dispatch, getState) => {
    dispatch({ type: BEFORE_USER_STATE })
    const { currentUser } = getState().Auth
    try {
      console.log("what id")
      console.log(currentUser.data.id)
      console.log("what update")
      console.log(updateUser)
      const res = await axios.put(`${API_ROUTE}/user/${currentUser.data.id}`, updateUser);
      let updatedUser = res.data
      console.log("find response")
      console.log(updatedUser)
      dispatch({ type: UPDATE_USER_SUCCESS, payload: currentUser.data })
      // window.localStorage.setItem('user_data', JSON.stringify(updatedUser)); //update the localstorages
      clearInput()
    } catch (err) {
      dispatch({ type: UPDATE_USER_ERROR, payload:err.response })
    }
  }
}
export const deleteUser = (id)  => {

  return async dispatch => {
    dispatch({ type: BEFORE_STATE })
    try {
      const res = await axios.delete(`${API_ROUTE}/users/${id}`);
      let deleteMessage = res.data.response
      dispatch({ type: DELETE_USER_SUCCESS, payload: deleteMessage })
      window.localStorage.clear(); //update the localstorage
      window.location.href = "/"
    } catch (err) {
      dispatch({ type: DELETE_USER_ERROR, payload: err.response.data.error })
    }
  }
}


// export const ForgotPassword = (userEmail, clearInput) => {

//   return async (dispatch) => {

//     dispatch({ type: BEFORE_STATE })
    
//     try {
//       const res = await axios.post(`${API_ROUTE}/password/forgot`, userEmail);
//       let passwordRequest = res.data.response
//       dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: passwordRequest })
//       clearInput()
//     } catch (err) {
//       dispatch({ type: FORGOT_PASSWORD_ERROR, payload: err.response.data.error })
//     }
//   }
// }

// export const ResetPassword = (details, clearInput) => {

//   return async (dispatch) => {
    
//     dispatch({ type: BEFORE_STATE })

//     try {
//       const res = await axios.post(`${API_ROUTE}/password/reset`, details);
//       let passwordRequest = res.data.response
//       dispatch({ type: RESET_PASSWORD_SUCCESS, payload: passwordRequest })
//       clearInput()
//     } catch (err) {
//       dispatch({ type: RESET_PASSWORD_ERROR, payload: err.response.data.error })
//     }
//   }
// }

