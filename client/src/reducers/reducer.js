import {RECEIVE_INCIDENTS} from '../actions/incident_actions';

const reducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_INCIDENTS:
      return action.incidents;
    default:
      return state;
  }
};

export default reducer;