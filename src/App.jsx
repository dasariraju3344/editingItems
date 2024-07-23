import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Input from './components/Input';

function App() {
  const [count, setCount] = useState(0);

  const negativeHandle = () => {
    const i = count-1
    setCount(i)
  }

  const positiveHandle = () => {
    setCount(count => count+1)
    setCount(updated => updated + 1)
  }


  return (
    <center>
      <h1>Count</h1>
      <button type="button" className="btn btn-primary button" onClick={negativeHandle}>-</button>
        <span>{count}</span>
      <button type="button" className="btn btn-primary button" onClick={positiveHandle}>+</button>
      <hr></hr>
      <Input></Input>
    </center>
  )
}

export default App;