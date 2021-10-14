import React from 'react';
import { useState } from 'react';

const Temperatue = () => {
  const [celcius, setCelcius] = useState('');
  const [farenheit, setFarenheit] = useState('');
 
  const convert = (event, type) => {
    const value = event.target.value;
    if(type === 'c') {
      setCelcius(value);
      const f = value * (9/5) + 32;
      setFarenheit(f);
    } else {
      setFarenheit(value);
      const c = (value - 32) * (5/9);
      setCelcius(c);
    }
  };

  return <div className="temperature-container">
            <input type="number" name="celcius" onChange={(e) => convert(e,'c')} value={celcius}/>Celcius -
            <input type="number" name="fahrenheit" onChange={(e) =>convert(e,'f')} value={farenheit}/> Fahrenheit
        </div>

}

export default Temperatue;