
import React, { useState, useEffect } from 'react';
import './App.css'

const btnStyle = {
    color: "white",
    padding: "1%",
    border: "1px solid #ececec",
    background: "#ff0000",
    fontSize: "1.25rem",
  }
  const btnStyleR = {
    color: "white",
    padding: "1%",
    border: "1px solid #ececec",
    background: "#178277",
    fontSize: "1.25rem",
  }

const Title = {  
    fontSize: "1.5rem",
    color: "#333",
}

const main = {
  paddingLeft: "2%",
  width:"80%",
  margin:"0 auto",
}

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // browser title 수정
    document.title='My first react';
  });
  
  useEffect(() => {
    console.log('lifecycle')
  },[count]);
  useEffect(() => {
    console.log('re-render');
    return () => {
      console.log('death');
    };
  },[count]);
  
  return (
    <div style={main}>
      <p style={Title}> You clicked {count} times</p>
      <button style={btnStyle} onClick={() => setCount(count + 1)}>
        Click +1 
      </button>
      <button style={btnStyleR} onClick={() => setCount(count - 1)}>
        Click -1
      </button>
    </div>
  );
}
export default App;

