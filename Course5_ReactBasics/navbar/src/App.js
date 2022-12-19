import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import LogicalAndExample from "./components/LogicalAndExample";
import CurrentTime from "./components/CurrentTime";
import WeekDay from "./components/WeekDay";

function App() {
  const day = new Date();
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home Page
        </Link>
        <Link to="/about-me" className="nav-item">
          About Us
        </Link>
        <Link to="/contact-me" className="nav-item">
          Contact Us
        </Link>
        <Link to="/weekday" className="nav-item">
          Week Day
        </Link>
        <Link to="/logical-and" className="nav-item">
          Logical And Example
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/weekday" element={<WeekDay time={day} />} />
        <Route path="/logical-and" element={<LogicalAndExample />} />
      </Routes>

      <CurrentTime day={day.getDay()}/>
    </div>
  );
}

export default App;
