import { combineReducers } from 'redux';
import { CHANGE_PREVIEW } from '../actions/index.js';

const initialState = {
  previewing:{}
}

const mainApp = (state=initialState, action) => {
  switch(action.type){
    case CHANGE_PREVIEW:
    return changePreview( state, action );
    break;
    default:
    return state;
    break;
  }
}

// reducer functions:

const changePreview = ( state = { previewing:'' },action)=>{
  switch(action.type){
    case CHANGE_PREVIEW:
    return {
      ...state,
      previewing:action.movie
    }
    default:
    return state;
  }
}

const allReducers = combineReducers({
  mainApp
});

export default allReducers;
