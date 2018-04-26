const initialState = {
    home: true,
    placargeral: false,
    dadosTime: []
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case "HOME_ON":
            {
                const newState = {
                    ...state,
                    home: true
                };
                return newState;
            }
        case "HOME_OFF":
            {
                const newState = {
                    ...state,
                    home: false
                };
                return newState;
            }
        case "PLACAR_GERAL_ON":
            {
                const newState = {
                    ...state,
                    placargeral: true
                };
                return newState;
            }
        case "PLACAR_GERAL_OFF":
            {
                const newState = {
                    ...state,
                    placargeral: false
                };
                return newState;
            }
        case "DADOS_TIME":
            {
                const newState = {
                    ...state,
                    dadosTime: action.payload
                };
                return newState;
            }
        default:
            {
                return state;
            }
    }
}