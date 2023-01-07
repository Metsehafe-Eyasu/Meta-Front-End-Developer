import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import RenderProps from "./components/RenderProps";

const withMouseEffect = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mouseover", handleMousePositionChange);

      return () => {
        window.removeEventListener("mouseover", handleMousePositionChange);
      };
    }, [mousePosition]);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) return null;
  return (
    <div className="BasicTracker">
      <p>Mouse Position: </p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) return null;
  return (
    <p className="point">
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMouseEffect(PanelMouseLogger);
const PointMouseTracker = withMouseEffect(PointMouseLogger);

const Home = () => {
    return (
        <div>
            <PanelMouseTracker />
            <PointMouseTracker />
        </div>

    )
}

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant</header>
      <nav>
        <Link to='/' className="nav-item">Home</Link>
        <Link to='/render' className="nav-item">Render Props</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/render" element={<RenderProps />}/>
      </Routes>
    </div>
  );
}

export default App;
