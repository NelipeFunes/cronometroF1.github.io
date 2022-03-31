import { ADD_MINUTE } from "../actions/actions";

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MINUTE:
      return {
        ...state,
        minutes: state.minutes + 1,
    }
    default: 
    return state;
  }
}
