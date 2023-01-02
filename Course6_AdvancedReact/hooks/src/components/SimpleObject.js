import { useState } from "react";

const SimpleObject = () => {
    const [greeting, setGreeting] = useState({ greet: "Hello, World" });
    console.log(greeting, setGreeting);
    
    const updateGreeting = () => {
      // The recommended way to update state
      // Create a copy of the state object using spread operator
      // Update the copy then place that in the setState function
      const newGreeting = {...greeting}
      newGreeting.greet = 'Hello, World Wide Web' 
      setGreeting(newGreeting);
    };
    
    const resetGreeting = () => {
      // greeting.greet = 'Hello World!!'  // This is an error! 
      // setGreeting(greeting)             // It does not update
      setGreeting({greet: 'Hello, World'}) 
          // This works but isn't recommended, 
          // Updating the whole object is tedious
    }

    return (
        <div>
            <h1>{greeting.greet}</h1>
            <button onClick={updateGreeting}>Update Greeting</button>
            <button onClick={resetGreeting}>Reset Greeting</button>
        </div>
    )
}

export default SimpleObject