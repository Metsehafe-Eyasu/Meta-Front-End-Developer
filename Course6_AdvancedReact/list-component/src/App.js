import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import DessertsList from "./components/DessertsList";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import FormComponent from "./components/FormComponent";
import RegistrationForm from "./components/RegistrationForm";

const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: "https://picsum.photos/200",
    price: "$5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: "https://picsum.photos/200",
    price: "$5.00",
  },
  {
    id: "3",
    title: "Chocolate mousse",
    description: "Unexpected flavor",
    image: "https://picsum.photos/200",
    price: "$5.00",
  },
];

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

// const topDesserts = data.map(dessert => {
//     return {
//         content: `${dessert.title} - ${dessert.description}` ,
//         price: dessert.price,
//     }
// })

const Home = () => {
  const listItem = data.map((dessert) => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return <li>{itemText}</li>;
  });
  return (
    <div className="App">
      <h1>Examining the console output</h1>
      <ul>{listItem}</ul>

      <div className="desert">
        <DessertsList data={desserts} />
      </div>

      <div className="todo">
        <ToDoList />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home Page
        </Link>
        <Link to="/form" className="nav-item">
          Form Page
        </Link>
        <Link to="/FormComponent" className="nav-item">
          Form component
        </Link>
        <Link to="/Registration" className="nav-item">
          Registration Form
        </Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/FormComponent" element={<FormComponent />} />
        <Route path="/Registration" element={<RegistrationForm />} />
      </Routes>

      <div>
        <formComponent />
      </div>
    </div>
  );
}

export default App;
