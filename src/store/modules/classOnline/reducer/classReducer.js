import {CREATE_CLASS_SUCCESS,CREATE_CLASS_ERROR,FETCH_CLASS,FETCH_CLASS_ERROR,BEFORE_STATE_CLASS,GET_CLASS_SUCCESS,DELETE_CLASS_SUCCESS,DELETE_CLASS_ERROR} from "../classTypes"

export const initState = {
    posts: [],
    authPosts: [],
    post: {},
    postsError: null,
    isLoading: false,
  }

  export const classState = (state = initState, action) => {
    const { payload, type } = action
    switch(type) {
        case BEFORE_STATE_CLASS:
      return {
        ...state,
        postsError: null,
        isLoading: true,
      }
    case FETCH_CLASS:
      return { 
        ...state, 
        posts: payload,
        isLoading: false,
      }
      
    case FETCH_CLASS_ERROR:
      return { 
        ...state, 
        postsError: payload,
        isLoading: false 
      }



    case GET_CLASS_SUCCESS:
      return { 
        ...state, 
        post: payload,
        postsError: null,
        isLoading: false  
      }

    case GET_CLASS_SUCCESS:
      return { 
        ...state, 
        postsError: payload,
        isLoading: false 
      }

    case CREATE_CLASS_SUCCESS:
      return { 
        ...state, 
        posts: [payload, ...state.posts],
        authPosts: [payload, ...state.authPosts],
        postsError: null,
        isLoading: false  
      }

    case CREATE_CLASS_ERROR:
      return { 
        ...state, 
        postsError: payload,
        isLoading: false  
      }


   
     case DELETE_CLASS_SUCCESS:
      return { 
        ...state, 
        posts: state.posts.filter(post => post.id !== payload.deletedID),
        authPosts: state.authPosts.filter(post => post.id !== payload.deletedID),
        postsError: null,
        isLoading: false   
      }

    case DELETE_CLASS_ERROR:
      return { 
        ...state, 
        postsError: payload,
        isLoading: false  
      }



    default:
      return state
    }
  }