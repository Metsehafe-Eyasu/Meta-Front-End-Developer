import './App.css';
import FeedbackForm from './FeedbackForm';

function App() {
  const handleSubmit = () => {
    console.log('Form Submitted');
 }  
 return (
    <div className="App">
      <a href='https://littlelemon.com' className='App-link'>
        Little Lemon Restaurant
      </a>
      <FeedbackForm onSubmit={handleSubmit}/>

    </div>
  );
}

export default App;
