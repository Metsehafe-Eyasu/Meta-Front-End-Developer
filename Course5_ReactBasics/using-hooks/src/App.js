import './App.css';
import InputComponent from "./components/InputComponent.js";
import RegisterForm from './components/RegisterForm';
import MealsList from './components/MealsList';
import Counter from './components/Counter'
import MealsProvider from './providers/MealsProvider'
import Main from './components/PropDrilling';
import Reducer from './components/Reducer';


function App() {
  return (
    <div className="app">
        <MealsProvider>
            <MealsList />
            <Counter />
        </MealsProvider>

        <Reducer />

        <InputComponent />
        <RegisterForm />

        <Main  
            msg="I passed through the Header and the Wrapper and I reached the Button component"  
        />

    </div>
  );
}

export default App;
