import "../style/button.css"
const Button = ({ func, name }) => {
    return (
        <button className="resetBtn" onClick={func}>
            <p>{name}</p>
        </button>
    )
}
export default Button