import { snacks } from "../Utils/SnackData";

export const initialState = {
    snackDb: snacks,
    sortOrder: "ascending"
}


export const SnackReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SORT_BY_ID":
            return { ...state, snackDb: payload.sortedSnackDb, sortOrder: payload.sortOrder }
        case "SORT_BY_PNAME":
            return { ...state, snackDb: payload.sortedSnackDbByPName, sortOrder: payload.sortOrder }
        case "SORT_BY_PRICE":
            return { ...state, snackDb: payload.sortedSnackDByPrice, sortOrder: payload.sortOrder }
        case "SORT_BY_CALORIES":
            return { ...state, snackDb: payload.sortedSnackDBycalories, sortOrder: payload.sortOrder }
        case "SORT_BY_INGREDIENTS":
            return { ...state, snackDb: payload.sortedSnackDByIngredients, sortOrder: payload.sortOrder }
        case "SORT_BY_PWEIGHT":
            return { ...state, snackDb: payload.sortedSnackDByPWeignt, sortOrder: payload.sortOrder }
        default:
            throw new Error(`Unknown action type ${action.type}`)
    }
}