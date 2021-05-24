import React, {useState, useEffect} from "react";
import "./assets/css/style.css";

function App(){
  const initialCount = +localStorage.getItem('storageCount') || 0;
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount(count+1);
  };

  useEffect(() => localStorage.setItem('storageCount', count));
  window.addEventListener('storage',e => setCount(+e.newValue))

  return (
    <div className="app" onClick={incrementCount}>
        <div className="count">
          {count}
        </div>
    </div>
  )
}

export default App;