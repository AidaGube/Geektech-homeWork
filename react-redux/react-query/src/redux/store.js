
function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/inc':
            return { value: state.value + 1 }
        case 'counter/dec':
            return { value: state.value - 1 }
        default:
            return state
    }
}