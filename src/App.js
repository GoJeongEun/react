
import React, { useState, useEffect } from 'react';

const btnStyle = {
  color: "white",
  padding: "1%",
  border: "1px solid #ececec",
  background: "#333",
  fontSize: "1.25rem",
}
const Title = {
  fontSize: "1.5rem",
  color: "#333",
  padding: "2%",
} 

function App() {
  console.log('Hello')
  console.log('react')
  const [count, setCount] = useState(0);
  useEffect(() => {
    // browser title 수정
    document.title='My first react';
  });
  
  useEffect(() => {
    console.log('lifecycle')
  },[count]);
  useEffect(() => {
    console.log('첫 렌더링에만 호출')
  }, [])
  return (
    <div>
      <p style={Title}> You clicked {count} times</p>
      <button style={btnStyle} onClick={() => setCount(count + 1)}>
        Click +1 
      </button>
      <button style={btnStyle} onClick={() => setCount(count - 1)}>
        Click -1
      </button>
    </div>
  );
}
export default App;

