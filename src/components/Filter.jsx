import { useState } from "react"

export default function Filter({ passFilter }) {
    return (
        <div id="filter">
            <select onChange={passFilter} name="category" id="category">
                <option value="plant_pots">Plant pots</option>
                <option value="ceramics">Ceramics</option>
            </select>
            <select onChange={passFilter} name="price" id="price">
                <option value="0_150">0-150</option>
                <option value="150_300">150-300</option>
            </select>
            <select onChange={passFilter} name="brand" id="brand">
                <option value="plantius">Plantius</option>
                <option value="sofius">Sofius</option>
            </select>
        </div>
    )
}