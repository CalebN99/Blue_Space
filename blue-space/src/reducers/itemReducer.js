import {
    USER_LOGIN,
    CREATE_USER
  } from "../actions/types";
//   import { startSession } from "mongoose";
  
  const initialState = {
    user: [],
    userAlreadyExists: "exists",
    auth: (a = initialState) => {
      if (a.user.user.length > 0) {
        return {
          loadingIn: true,
       
        };
      }
    },
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
    switch (action.type) {
      case CREATE_USER:
        console.log("CREATE_USER")
        if (action.payload === "User already exists") {
          return {
            userAlreadyExists: true,
            ...state
          };
        }
        return {
          ...state
        };
        case USER_LOGIN:
            if (action.payload !== "") {
                return {
                 ...state,
                user: action.payload,
                loggedIn: true,
                };
            } else if (action.payload === "") {
                return {
                 ...state,
                };
            }
            break;
        default:
            return {
              ...state,
            };
    }
  }



      //   case CREATE_ACCOUNT:
    //     return {
    //       ...state,
    //     };
    //   case CREATE_GROUP:
    //     return {
    //       ...state,
    //     };
    //   case ITEMS_LOADING:
    //     return {
    //       ...state,
    //       loading: true,
    //     };
    //   case AUTH_LOGIN:
    //     if (action.payload !== "") {
    //       return {
    //         ...state,
    //         user: action.payload,
    //         loggedIn: true,
    //       };
    //     } else if (action.payload === "") {
    //       return {
    //         ...state,
    //       };
    //     }
    //   // eslint-disable-next-line no-fallthrough
    //   case GROUPID_UPDATE:
    //     return {
    //       ...state,
    //       user: action.payload,
    //     };
    //   case ADD_GROUPS:
    //     return {
    //       ...state,
    //       user: action.payload,
    //     };
    //   case ADD_BUG:
    //     return {
    //       ...state,
    //       bugs: [action.payload, ...state.bugs],
    //     };
    //   case GET_BUGS:
    //     return {
    //       ...state,
    //       bugs: action.payload,
    //     };
  
    //   case DELETE_BUG:
    //     return {
    //       ...state,
    //       bugs: state.bugs.filter((bug) => bug._id !== action.payload),
    //     };
  