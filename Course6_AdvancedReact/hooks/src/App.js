import "./App.css";

import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ComplexObject from "./components/ComplexObject";
import SimpleObject from "./components/SimpleObject";
import Goals from "./components/Goals";
import Gift from "./components/Gift";
import DataFetch from "./components/DataFetch";
import CouponWinner from './components/CouponWinner'
import CustomHook from './components/CustomHook'
import Days from './components/Days'

function App() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle); 
  };

  useEffect(() => {
    document.title = toggle
      ? "Welcome to Little Lemon"
      : "Using the useEffect Hook";
  }, [toggle]);

  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">
          Simple object
        </Link>
        <Link to="/complex" className="nav-item">
          Complex object
        </Link>
        <Link to="/goals" className="nav-item">
          Goals
        </Link>
        <Link to="/gift" className="nav-item">
          Gift Cards
        </Link>
        <Link to="/fetch" className="nav-item">
          Fetch Data
        </Link>
        <Link to="/coupon" className="nav-item">
          Coupon Winner
        </Link>
        <Link to="/customHook" className="nav-item">
          Custom hook
        </Link>
        <Link to="/days" className="nav-item">
          Days
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<SimpleObject />} />
        <Route path="/complex" element={<ComplexObject />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/fetch" element={<DataFetch />} />
        <Route path="/coupon" element={<CouponWinner />} />
        <Route path="/customHook" element={<CustomHook />} />
        <Route path="/days" element={<Days />} />
      </Routes>

      <div className="effect">
        <h1>Using the useEffect Hook</h1>
        <button onClick={clickHandler}>Toggle Message</button>
        {toggle && <h2>Welcome to Little Lemon</h2>}
      </div>
    </div>
  );
}

export default App;
