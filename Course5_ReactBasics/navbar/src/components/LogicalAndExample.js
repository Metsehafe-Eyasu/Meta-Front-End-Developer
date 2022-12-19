const LogicalAndExample = () => {
    const val = prompt('Anything but a 0')
    console.log(val);
    return(
        <div>
            <h1>Please Dont type in a zero</h1>
            {
                !(val==='0') && <h2>Yay, no 0 was typed</h2>
            }
        </div>
    )
}

export default LogicalAndExample;