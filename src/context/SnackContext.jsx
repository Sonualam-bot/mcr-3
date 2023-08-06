import { createContext, useReducer } from "react";
import { SnackReducer, initialState } from "../reducer/SnackReducer";

export const SnackContext = createContext();


export const SnackContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SnackReducer, initialState);

    const handleSearch = state.searchValue === "" ? state.snackDb :
        state.snackDb?.filter((snack) => snack.product_name?.toLowerCase().includes(state?.searchValue?.toLowerCase()) || snack.ingredients?.join().toLowerCase().includes(state.searchValue.toLowerCase()))

    const newSortOrder = state.sortOrder === "ascending" ? "descending" : "ascending";



    const sortById = () => {
        const sortedSnackDb = handleSearch.sort((a, b) => {
            if (newSortOrder === "ascending") {
                return a.id - b.id;
            } else {
                return b.id - a.id;
            }
        });

        dispatch({
            type: "SORT_BY_ID",
            payload: {
                sortedSnackDb: sortedSnackDb,
                sortOrder: newSortOrder,
            },
        });
    };

    const sortByPName = () => {
        const sortedSnackDbByPName = handleSearch.sort((a, b) => {
            if (newSortOrder === "ascending") {
                return a.product_name.localeCompare(b.product_name);
            } else {
                return b.product_name.localeCompare(a.product_name);
            }
        });
        dispatch({
            type: "SORT_BY_PNAME",
            payload: {
                sortedSnackDbByPName: sortedSnackDbByPName,
                sortOrder: newSortOrder
            }
        })
    }


    const sortByPrice = () => {
        const sortedSnackDByPrice = handleSearch.sort((a, b) => {
            if (newSortOrder === "ascending") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });

        dispatch({
            type: "SORT_BY_PRICE",
            payload: {
                sortedSnackDByPrice: sortedSnackDByPrice,
                sortOrder: newSortOrder,
            },
        });
    };
    const sortByCalories = () => {
        const sortedSnackDBycalories = handleSearch.sort((a, b) => {
            if (newSortOrder === "ascending") {
                return a.calories - b.calories;
            } else {
                return b.calories - a.calories;
            }
        });

        dispatch({
            type: "SORT_BY_CALORIES",
            payload: {
                sortedSnackDBycalories: sortedSnackDBycalories,
                sortOrder: newSortOrder,
            },
        });
    };


    const sortByIngredients = () => {
        const sortedSnackDByIngredients = handleSearch.sort((a, b) => {
            const ingredientsA = a.ingredients.join(", ");
            const ingredientsB = b.ingredients.join(", ");

            if (newSortOrder === "ascending") {
                return ingredientsA.localeCompare(ingredientsB);
            } else {
                return ingredientsB.localeCompare(ingredientsA);
            }
        });

        dispatch({
            type: "SORT_BY_INGREDIENTS",
            payload: {
                sortedSnackDByIngredients: sortedSnackDByIngredients,
                sortOrder: newSortOrder,
            },
        });
    };




    const sortByPweight = () => {
        const sortedSnackDByPWeignt = handleSearch.sort((a, b) => {
            if (newSortOrder === "ascending") {
                return parseInt(a.product_weight) - parseInt(b.product_weight);
            } else {
                return parseInt(b.product_weight) - parseInt(a.product_weight);
            }
        });

        dispatch({
            type: "SORT_BY_PWEIGHT",
            payload: {
                sortedSnackDByPWeignt: sortedSnackDByPWeignt,
                sortOrder: newSortOrder,
            },
        });
    };


    const handleSearchInput = (e) => {
        dispatch({
            type: "SEARCH",
            payload: {
                searchValue: e.target.value
            }
        })
    }


    const value = {
        state,
        sortById,
        sortByPName,
        sortByPrice,
        sortByCalories,
        sortByIngredients,
        sortByPweight,
        handleSearchInput,
        handleSearch
    }


    return (
        <SnackContext.Provider value={value} >
            {children}
        </SnackContext.Provider>
    )
}