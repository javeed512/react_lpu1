
import AComponent from './AComponent';
import './App.css';

function App() {

  const price = 5000;
  return (
   
    <>
      <h1>Welcome to App Component</h1>

    <AComponent data={price} />

    </>
  );
}

export default App;
