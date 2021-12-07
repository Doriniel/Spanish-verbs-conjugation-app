export default function rootReudcer (state = {}, action) {
    switch(action.type) {
        case 'CHOOSE_SETTINGS':
            return {...state,  settings: action.payload}
        default: return state
    }
}