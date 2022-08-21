import React, { useState, useEffect } from 'react';

const SingleColor = ({ rgb, weight, type, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hexColor}`;

  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
        setTimeout(() => {
          setAlert(false);
        }, 800);
      }}
      className={`color`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p
        className="percent-value"
        style={{ color: `${type === 'tint' ? '#333' : '#ccc'}` }}
      >
        {weight}%
      </p>
      <p
        className="color-value"
        style={{ color: `${type === 'tint' ? '#333' : '#ccc'}` }}
      >
        {hexValue}
      </p>
      <p
        className={`alert ${alert && 'showAlert'}`}
        style={{ color: `${type === 'tint' ? '#333' : '#ccc'}` }}
      >
        Copied to clipboard
      </p>
    </article>
  );
};

export default SingleColor;
