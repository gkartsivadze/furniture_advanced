export default function TextInput({ placeHolder }) {
    return (
        <div className="text_input">
            <input placeholder={placeHolder} type="text" />
            <button>Sign up</button>
        </div>
    )
}