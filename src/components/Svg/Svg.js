import React, { useEffect, useState } from 'react';
import './Svg.scss';

const Svg = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue(Math.random());
    }, 200);
  }, []);

  return (
    <div>
      <div style={{ width: '280px' }}>
        <svg viewBox="0 0 268 268" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle r="130px" cx="134px" cy="134px" fill="none" stroke="#008B6F" strokeWidth="7px"></circle>
          <line x1="47" y1="198" x2="221" y2="198" stroke="#fff" strokeWidth="3px" />
          <polygon points="52,190 134,30 216,190" fill="#008B6F" stroke="#fff" strokeWidth="2px" />
          <text x="134" y="142" fontSize="60px" textAnchor="middle">
            SVG
          </text>
          <g className="triangle-group" transform="translate(45,67) rotate(10 12.5 12.5)">
            <polygon points="7,10 12,0 17,10" />
            <polygon points="0,25 5,15 10,25" />
            <polygon points="15,25 20,15 25,25" />
          </g>

          <g className="triangle-group" transform="translate(198,67) rotate(-10 12.5 12.5)">
            <polygon points="7,10 12,0 17,10" />
            <polygon points="0,25 5,15 10,25" />
            <polygon points="15,25 20,15 25,25" />
          </g>

          <g className="triangle-group" transform="translate(121.5,211) scale(0.5) translate(8,8)">
            <polygon points="7,10 12,0 17,10" />
            <polygon points="0,25 5,15 10,25" />
            <polygon points="15,25 20,15 25,25" />
          </g>
        </svg>
      </div>
      <div style={{ width: '200px' }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 50 100 50"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(-180)"
        >
          <circle
            id="circle"
            cx="50"
            cy="50"
            r="30"
            strokeWidth="10px"
            strokeDasharray="94.5"
            fill="none"
            stroke="grey"
          />
          <circle
            id="circle"
            cx="50"
            cy="50"
            r="30"
            strokeWidth="10px"
            strokeDashoffset={`${(1 - value * 0.5) * 189}`}
            strokeDasharray="189"
            fill="none"
            stroke="red"
          />
        </svg>
      </div>
      <p>hello</p>
    </div>
  );
};

export default Svg;
