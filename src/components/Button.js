
const Button = ({ color, text, onClick }) => {
    return (
        <button
            style={{ background: color, width: '70px', height: '30px', padding: '1px' }}
            className='btn'
            onClick={onClick}
        >
            {text}
        </button>
    )
}


export default Button