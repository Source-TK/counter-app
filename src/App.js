import logo from './logo.svg';
import './App.css';

import Display from './components/display'
import Button from './components/button'

import {useState} from 'react'

function App() {

  const [counter, setCount] = useState(0);

  const [name, setName] = useState("Kgopolo")

  var c = 0;

  const changeName = () => {
    setName("Vincent")

  }

  const increment = () => {

    let sum = counter + 1;
    setCount(sum);
  }

  const decrement = () => {
    let sum = counter - 1;
    setCount(sum);

  } 

  return (
    <div className="App">

      <Display counter={counter} />
      <Button increment={increment} />
      <h1>{name}</h1>
      <button onClick={changeName}>SET NAME</button>



    </div>
  );
}

export default App;
