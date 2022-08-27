import { combineReducers } from 'redux';
 
import volunReducer from './VolunReducer';

export default combineReducers({
 
  volun: volunReducer
});