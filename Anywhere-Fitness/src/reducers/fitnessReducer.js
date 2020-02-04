import {
  GET_CLASSES_START,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_FINISH,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions"

const initialState = {
  user: {
    username: "",
    email: "",
    role: "",
    id: ""
  },
  isLoading: false,
  users: [],
  classes: [],
  error: false
}

export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLASSES_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_CLASSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        classes: action.payload
      }
    case GET_CLASSES_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case LOGIN_START:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case LOGIN_FINISH:
      return {
        ...state,
        isLoading: false
      }
    case REGISTER_START:
      return {
        ...state,
        isLoading: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}
