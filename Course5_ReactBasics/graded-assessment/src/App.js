import {
    useState,
    useRef
  } from "react"; 
  import "./App.css";
  
  function App() { 
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
   
    function plus(e) { 
      e.preventDefault(); 
      setResult((result) => result + Number(inputRef.current.value)); 
      reseter();
    }; 
    
    function minus(e) { 
        // Add the code for the minus function 
        e.preventDefault(); 
        setResult((result) => result - Number(inputRef.current.value)); 
        reseter();
    };
    
    function times(e) { 
        // Add the code for the plus function 
        e.preventDefault(); 
        setResult((result) => result * Number(inputRef.current.value)); 
        reseter();
    }; 
    
    function divide(e) { 
        // Add the code for the divide function 
        e.preventDefault(); 
        setResult((result) => result / Number(inputRef.current.value)); 
        reseter();        
    };
    
    function resetInput(e) { 
        // Add the code for the resetInput function 
        e.preventDefault(); 
        inputRef.current.value = '' 
        reseter();
    }; 
    
    function resetResult(e) { 
        // Add the code for the resetResult function 
        e.preventDefault(); 
        setResult(0);
    }; 

    function reseter() {
        inputRef.current.focus();
    }
   
    return ( 
      <div className="App"> 
        <div> 
          <h1>Simplest Working Calculator</h1> 
        </div> 
        <form> 
          <p ref={resultRef}> 
            {result} 
          </p> 
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          /> 
          <button onClick={plus}>add</button> 
          <button onClick={minus}>subtract</button> 
          <button onClick={times}>multiply</button> 
          <button onClick={divide}>divide</button> 
          <button onClick={resetInput}>reset input</button> 
          <button onClick={resetResult}>reset result</button> 
        </form> 
      </div> 
    ); 
  } 
   
  export default App;
  