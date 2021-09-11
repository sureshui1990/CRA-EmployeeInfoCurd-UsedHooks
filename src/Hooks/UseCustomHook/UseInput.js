import { useState } from 'react';

const UseInput = () => {
  const [firstName, setFirstName] = useState('');

  const bindAttributes = {
      value: firstName,
      onChange: e => {
          setFirstName(e.target.value);
      }
  };
  const handleSubmit = e => {
    console.log('first',firstName );
    e.preventDefault();
    setFirstName('');
  }
  return [firstName,bindAttributes, handleSubmit];
}

export default UseInput;
