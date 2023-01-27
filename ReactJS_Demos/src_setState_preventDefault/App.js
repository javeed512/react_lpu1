
import './App.css';
import Dept from './Dept';
import Employee from './Employee';

function App() {
  return (
   
    <>
      <h1>Welcome to App Component</h1>

      <Employee job="Developer"/>


      <Dept dno={401} />

    </>
  );
}

export default App;
