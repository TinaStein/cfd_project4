import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  const [userName, setUserName] = useState("tina");
  return (
    <div className="App">
      <Header />
      <h1>Cubs Stink!</h1>
      <div>
        <label>UserName: </label>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
      </div>

      <h1>{userName}</h1>
    </div>
  );
}

export default App;
