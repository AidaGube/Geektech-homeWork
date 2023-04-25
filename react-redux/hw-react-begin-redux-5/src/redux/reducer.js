
const initialState = { //изначальное состояние
    count: 0
}

export default function reducer(state = initialState, action) {
    console.log(action);
    if (action.type === "INCREMENT") {
        return {
            count: state.count + 1
        }
    }
    else if (action.type === "DECREMENT") {
        return {
            count: state.count > 0 ? state.count - 1 : 0
        }
    }
    return state
}