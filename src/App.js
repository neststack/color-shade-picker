import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('#9b2335');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#9b2335').all(10));

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      console.log(error);
    }
    setColor('');
  };

  return (
    <>
      <section className="container">
        <div className="mid">
          <h3>color shades</h3>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
                setError(false);
              }}
              onFocus={() => setError(false)}
              placeholder="#9b2335"
              className={`${error && 'error'}`}
            />
            <button type="submit" className="btn">
              submit
            </button>
          </form>
        </div>
        <p className={`errorText ${error && 'show'}`}>Invalid input</p>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        ))}
      </section>
    </>
  );
}

export default App;
