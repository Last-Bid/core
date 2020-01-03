
// (state, action) => new state
// action
function buyCake() {
    return {
        type : 'BUY_CAKE',
        info : 'A action'
    }
}

// initial state
const cakeState = {
    cakes : 10
};

const reducer = (state = cakeState, action) => {
    switch(action.type) {
        case 'BUY_CAKE':
            return {
                ...state, // make a copy of state and only update - spread operator
                cakes : state.cakes - 1
            };
            // let objClone = { ...obj }
        default:
            return state;
    }
};

const store = createStore(reducer);