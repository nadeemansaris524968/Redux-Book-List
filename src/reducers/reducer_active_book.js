// state arg is not the application state,
// only the state that this reducer is responsible for

// state = null says if state is undefined, set state to null so that the 
// reducer at least returns a null rather than an undefined which is not 
// allowed by Redux.
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
    // Always return a non-undefined value, otherwise Redux will throw an error
}