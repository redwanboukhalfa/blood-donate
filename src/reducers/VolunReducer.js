import {
   GET_VOLUN,
   ADD_VOLUN,
   DELETE_VOLUN,
   VOLUNS_ERROR,
   SEARCH_VOLUN,
   SET_LOADING,
   SET_CURRENT,
   CLEAR_CURRENT,
   UPDATE_VOLUN
 } from '../Actions/Types';

const initialState={
     voluns:null,
     loading:false,
     error:null,
     current:null

};
export default (state=initialState,action)=>{

    switch(action.type) {
      case  GET_VOLUN:
         return {
           ...state,
           voluns: action.payload,
           loading: false
         };
         case DELETE_VOLUN:
            return{
            ...state,
            voluns:state.voluns.filter(volun => volun.id !== action.payload)
         }
         case  ADD_VOLUN:
            return {
               ...state,
               voluns: [...state.voluns,action.payload]
            }
        case SET_LOADING: 
      return{
         ...state,
         loading:true
      }
      case SEARCH_VOLUN:
         return{
            ...state,
            voluns:action.payload,

         }
      case  VOLUNS_ERROR:{
         console.error(action.payload);
         return {
            ...state,
            error:action.payload
         }
      }

      case UPDATE_VOLUN :
         return{
            ...state,
            voluns:state.voluns.map(volun => volun.id ===action.payload.id ? action.payload:volun)
         }
      case SET_CURRENT:
         return {
            ...state,
            current:action.payload
         }
         case CLEAR_CURRENT :
            return{
               ...state,
               current:null
            }
    
        default:
              return state;
    }
};