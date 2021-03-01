
export const wordReducer = (state = "", action) => {
    switch (action.type)
    {
        case "SET_WORD":
            return state = action.payload;
        default:
            return state;
    }
}