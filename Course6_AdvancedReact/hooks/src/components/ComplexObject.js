import { useState } from "react"

const ComplexObject = () => {
    const [greeting, setGreeting] = useState(
    {
        greet: 'Hello',
        place: 'World'
    })

    console.log(greeting, setGreeting)

    const updateGreeting = () => {
        setGreeting(prevState => {
            return {...prevState, place: 'World-Wide Web'}
        })
    }

    return(
        <div>
            <h1>{greeting.greet}, {greeting.place}</h1>
            <button onClick={updateGreeting}>Update greeting</button>
        </div>
    )
}

export default ComplexObject