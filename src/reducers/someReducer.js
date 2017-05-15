const someReducer = (state = {someData: 'Press "dispatch" to put some random number into store'}, action) => {
    switch (action.type) {
    case 'SOME_ACTION':
        return { ...state, someData: action.payload };
    default:
        return state;
    }
};

export default someReducer;