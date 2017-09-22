
const reducer = function (state={}, action) {

    switch (action.type) {
        case 'SIGN_IN_SUCCESS':
            console.log("You clicked on user: ", JSON.stringify(action));
            return action.payload;

        default:
            return state;
    }
    return state;
};
export default reducer;