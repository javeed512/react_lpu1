
import './App.css';
import DeleteApi from './DeleteApi';
import GetApi from './GetApi';
import PostApi from './PostApi';
import PutApi from './PutApi';

function App() {
  return (
   
    <>
      <h1>Welcome to App Component</h1>

      <GetApi />

      <br/><br/>

      <PostApi />

     
      <br/><br/>

      <PutApi />

      <br/><br/>

    <DeleteApi />


      </>
  );
}

export default App;
