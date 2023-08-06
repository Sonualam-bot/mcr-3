import { useContext } from "react"
import { SnackContext } from "../context/SnackContext"
import "./Table.css"

export const SnackTable = () => {
    const { state: { snackDb, sortOrder }, sortById, sortByPName, sortByPrice, sortByCalories, sortByIngredients, sortByPweight } = useContext(SnackContext)
    return (
        <>
            <div className="tableContainer" >


                <table  >
                    <thead>
                        <tr className="tableRow" >
                            <th value={sortOrder} onClick={sortById} >ID {sortOrder === "ascending" ? "↑" : "↓"}    </th>
                            <th value={sortOrder} onClick={sortByPName}  >Product Name {sortOrder === "ascending" ? "↑" : "↓"} </th>
                            <th onClick={sortByPweight}  >Product weight {sortOrder === "ascending" ? "↑" : "↓"} </th>
                            <th onClick={sortByPrice}>Price(INR) {sortOrder === "ascending" ? "↑" : "↓"}</th>
                            <th onClick={sortByCalories}>Calories {sortOrder === "ascending" ? "↑" : "↓"}</th>
                            <th onClick={sortByIngredients} >Ingredients {sortOrder === "ascending" ? "↑" : "↓"} </th>
                        </tr>

                    </thead>

                    <tbody>
                        {snackDb.map((snack) => {
                            const { id, product_name, product_weight, price, calories, ingredients } = snack;
                            return (
                                <tr className="tableRow" key={id}>
                                    <td> {id} </td>
                                    <td>{product_name} </td>
                                    <td> {product_weight} </td>
                                    <td> {price} </td>
                                    <td> {calories} </td>
                                    <td> {ingredients.join(",")} </td>
                                </tr>
                            )
                        })
                        }

                    </tbody>
                </table>




            </div>
        </>
    )
}