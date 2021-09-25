import logo from './logo.svg';
import './App.css';
import Theaddress from "../src/Component/Address" ; 
import Thefullname from "../src/Component/FullName" ;
import Theprofilephoto from './Component/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <Theaddress/>
      
      <br/>
      <br/>

      <Thefullname/>

      <br/>
      <br/>

      <Theprofilephoto/>
    </div>
  );
}

export default App;
