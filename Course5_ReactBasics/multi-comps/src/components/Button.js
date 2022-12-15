const Button = (props) => {
    const clickHandler = () => console.log('Clicked');
    const hoverHandler = () => console.log('Mouse over');
    return (
        <button onClick={clickHandler} onMouseOver= {hoverHandler} className ="button">
            Click me
        </button>
    )
}

export default Button