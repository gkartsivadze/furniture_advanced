export default function Filter({ passFilter }) {
    return (
        <div id="filter">
            <select onChange={passFilter} name="category" id="category">
                <option value="any">Category</option>
                <option value="plant_pots">Plant pots</option>
                <option value="ceramic">Ceramic</option>
                <option value="tables">Tables</option>
                <option value="chairs">Chairs</option>
                <option value="crockery">Crockery</option>
            </select>
            <select onChange={passFilter} name="price" id="price">
                <option value="any">Price</option>
                <option value="0_150">0-150</option>
                <option value="150_300">150-300</option>
                <option value="300_600">300-600</option>
                <option value="600_1000">600-1000</option>
            </select>
            <select onChange={passFilter} name="brand" id="brand">
                <option value="any">Brand</option>
                <option value="a_brand">Brand A</option>
                <option value="b_brand">Brand B</option>
            </select>
        </div>
    )
}