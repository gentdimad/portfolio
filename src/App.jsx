import './App.css';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Hello, my name is V!</h1>
      <div className="card">
        <p>
          I will be building my portfolio on this page. Please wait for further updates.
        </p>
        <p>To pass the time, below is a pre-made button-click counter:</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
