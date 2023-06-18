
import './App.css';
import { useState } from 'react';

function App() {

  const [result, setResult] = useState("")

  const Click = (e) => {
    setResult(result.concat(e.target.value));
  }

  const clear = () => {
    setResult("")
  }

  const backspace = (e) => {

    setResult(result.slice(0, result.length - 1)) // 0,-1

  }

  const Calculate = () => {

    try {
      setResult(eval(result).toString())
    }

    catch (e) {
      setResult("Error")

    }
  }

  return (


    <div className='app'>
      <div id='container'>

        <h3>Calculator</h3>

        <input id='input' type="text" value={result} />

        <div id='keyboard'>
          <input type="button" value={"Clear"} onClick={clear} className='button' id='clear' />
          <input type="button" value={"C"} onClick={backspace} className='button' id='backspace' />
          <input type="button" value={"/"} onClick={Click} className='button' />
          <input type="button" value={1} onClick={Click} className='button' />
          <input type="button" value={2} onClick={Click} className='button' />
          <input type="button" value={3} onClick={Click} className='button' />
          <input type="button" value={"+"} onClick={Click} className='button' />
          <input type="button" value={4} onClick={Click} className='button' />
          <input type="button" value={5} onClick={Click} className='button' />
          <input type="button" value={6} onClick={Click} className='button' />
          <input type="button" value={"-"} onClick={Click} className='button' />
          <input type="button" value={7} onClick={Click} className='button' />
          <input type="button" value={8} onClick={Click} className='button' />
          <input type="button" value={9} onClick={Click} className='button' />
          <input type="button" value={"*"} onClick={Click} className='button' />
          <input type="button" value={"."} onClick={Click} className='button' />
          <input type="button" value={0} onClick={Click} className='button' />
          <input type="button" value={"="} onClick={Calculate} id='ans' className='button' />
        </div>
      </div>
    </div>

  )


}

export default App;