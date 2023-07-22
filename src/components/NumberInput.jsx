export default function NumberInput({ handleChoose, value }) {
    return (
        <div className="number_input">
            <input type="button" value="-" onClick={() => handleChoose("-")} />
            <input type="number" value={value} readOnly />
            <input type="button" value="+" onClick={() => handleChoose("+")} />
        </div>
    )
};
