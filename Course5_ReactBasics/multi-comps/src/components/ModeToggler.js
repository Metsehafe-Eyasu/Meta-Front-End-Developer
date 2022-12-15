const ModeToggler = () => {
    let darkModeOn = true;
    const darkMode = <h1>Dark mode is on</h1>
    const lightMode = <h1>Light Mode is on</h1>
    const handleClick = () => {
        darkModeOn = !darkModeOn;
        darkModeOn ? console.log('Dark mode is on') : console.log('Light Mode is on')
    }
    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}> Click me</button>
        </div>
    )
}

export default ModeToggler