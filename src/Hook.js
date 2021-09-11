import React, { useState, useEffect } from 'react';

const Hook = () =>  {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [isToggle, userToggle] = useState(false);

  useEffect(() => {
    console.log('UseEffect');
  },[isToggle]);
  
  // console.log('count', count);
  // console.log('isToggle', isToggle);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => userToggle(!isToggle)}>
        Toggle
      </button>
      <div>{isToggle ? <b>Welcome user</b> : <u>Please SignIN</u>}</div>
    </div>
  );
};

export default Hook;