const WeekDay = ({time}) => {
    // const time = new Date();
    const day = time.toLocaleString('en-us', {weekday: 'long'})
    const morning = time.getHours() >= 6 && time.getHours() <= 12;
    let dayMessage;
    let checker = day.toLowerCase();
    switch (checker) {
        case 'monday':
            dayMessage = `Happy ${day}`
            break;
        case 'tuesday':
            dayMessage = `${day}, four days to go`
            break;
        case 'wednesday':
            dayMessage = `${day}, half way there`
            break;
        case 'thursday':
            dayMessage = `${day}, start planning the weekend`
            break;
        case 'friday':
            dayMessage = `It's ${day}! Woo-hoo! The weekend is coming!`
            break;
        default:
            dayMessage = `Stay calm and keep having fun!`
            break;
    }
    return(
        <div>
            <h1>{dayMessage}</h1>
            {morning ? <h2> Have you had breakfast yet? </h2> : ''}
        </div>
    )
}

export default WeekDay;