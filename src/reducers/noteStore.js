const initialState = {
    note: [],
    array: [
        { old: 15, car: "green", result: false },
        { old: 17, car: "red", result: "noob" },
        { old: 16, car: "yellow", result: true }
    ],
}
export default function noteStore(state = initialState, action) {
    switch (action.type) {
        case "str_filter":
            return Object.assign({}, state, { note: state.note.concat(action.payload) });
        case "clear_text":
            return Object.assign({}, state, { note: [] });
        case "update_filter":
            return Object.assign({}, state, { note: (action.payload) });
        default:
            return state
    }
}
