import './App.css';
import InputComponent from "./components/InputComponent.js";
import RegisterForm from './components/RegisterForm';

function Main(props) { 
    return <Header msg={props.msg} />; 
  };
  
  function Header(props) { 
    return ( 
      <div style={{ border: "10px solid whitesmoke" }}> 
        <h1>Header here</h1> 
        <Wrapper msg={props.msg} /> 
      </div> 
    ); 
  };
  
  function Wrapper(props) { 
    return ( 
      <div style={{ border: "10px solid lightgray" }}> 
        <h2>Wrapper here</h2> 
        <Button msg={props.msg} /> 
      </div> 
    ); 
  };
  
  function Button(props) { 
    return ( 
      <div style={{ border: "20px solid orange" }}> 
        <h3>This is the Button component</h3> 
        <button onClick={() => alert(props.msg)}>Click me!</button> 
      </div> 
    ); 
  };

function App() {
  return (
    <div className="app">
        <InputComponent />
        <RegisterForm />

        <Main  
            msg="I passed through the Header and the Wrapper and I reached the Button component"  
        />
    </div>
  );
}

export default App;
