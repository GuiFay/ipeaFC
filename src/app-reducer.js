const initialState = {
  home: true,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "HOME_ON": {
      const newState = {
        ...state,
        home: true
      };
      return newState;
    }
    case "HOME_OFF": {
      const newState = {
        ...state,
        home: false
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
