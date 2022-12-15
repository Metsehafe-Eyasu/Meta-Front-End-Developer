import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";
import ModeToggler from "./components/ModeToggler";
import Child from "./components/Child.js";

function App() {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number: ");
    alert(`Computer Number: ${randomNum}, Your guess: ${userInput}`);
  };

  const date = new Date();
  return (
    <div className="container">
      <div className="left">
        <ModeToggler />
        <h1>Task: Add three Card elements</h1>
        <div className="cardContainer">
          <Card h2="First card's h2" h3="First card's h3" />
          <Card h2="Second card's h2" h3="Second card's h3" />
          <Card h2="Third card's h2" h3="Third card's h3" />
        </div>

        <div>
          <h1>Task: Add a button and handle a click event</h1>
          <button className="button" onClick={handleClick}>
            Guess the number between 1 and 3
          </button>
        </div>
        <Button />
      </div>

      <div className="right">
        <Child message= {date.toDateString()} />
      </div>
    </div>
  );
}

export default App;
