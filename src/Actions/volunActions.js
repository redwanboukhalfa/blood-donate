import {
  GET_VOLUN,
  ADD_VOLUN,
  DELETE_VOLUN,
  VOLUNS_ERROR,
  SEARCH_VOLUN,
  SET_LOADING,
  SET_CURRENT,
  UPDATE_VOLUN,
  CLEAR_CURRENT
} from './Types';

// Get Volunteer from server
export const getVolun = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/volunteers');
    const data = await res.json();

    dispatch({
      type: GET_VOLUN,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: VOLUNS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add Donor to server
export const addVolun = volun => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/volunteers', {
      method: 'POST',
      body: JSON.stringify(volun),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_VOLUN,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: VOLUNS_ERROR,
      payload: err.response.statusText
    });
  }
};
//delete a donor from server
export const deleteVolun = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_VOLUN,
      payload: id 
    });
  } catch (err) {
    dispatch({
      type: VOLUNS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search server donor
export const searchVolun = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/volunteers?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_VOLUN,
      payload: data
    });  
  } catch (err) {
    dispatch({
      type: VOLUNS_ERROR,
      payload: err.response.statusText
    });
  }
};


// Update volun on server
export const updateVolun = (volun) => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/volunteers/${volun.id}`, {
      method: 'PUT',
      body: JSON.stringify(volun),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_VOLUN,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: VOLUNS_ERROR,
      payload: err.response.statusText
    });
  }
};


// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
export const setCurrent = volun => {
  return {
    type: SET_CURRENT,
    payload: volun
  };
};
// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
}