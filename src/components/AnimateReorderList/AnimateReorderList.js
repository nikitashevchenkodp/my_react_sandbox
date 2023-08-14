import React, { createRef, useState } from 'react';
import AnimateList from './AnimateList';
import './AnimateReorderList.scss';

const AnimateReorderList = () => {
  const [items, setItems] = useState([
    { name: 1, color: Math.floor(Math.random() * 16777215).toString(16), size: Math.floor(Math.random() * 3) + 1 },
    { name: 2, color: Math.floor(Math.random() * 16777215).toString(16), size: Math.floor(Math.random() * 3) + 1 },
    { name: 3, color: Math.floor(Math.random() * 16777215).toString(16), size: Math.floor(Math.random() * 3) + 1 },
    { name: 4, color: Math.floor(Math.random() * 16777215).toString(16), size: Math.floor(Math.random() * 3) + 1 },
    { name: 5, color: Math.floor(Math.random() * 16777215).toString(16), size: Math.floor(Math.random() * 3) + 1 },
    { name: 6, color: Math.floor(Math.random() * 16777215).toString(16), size: Math.floor(Math.random() * 3) + 1 },
    { name: 7, color: Math.floor(Math.random() * 16777215).toString(16), size: Math.floor(Math.random() * 3) + 1 },
  ]);

  const addItem = () => {
    const newItem = { name: items.length + 1, color: Math.floor(Math.random() * 16777215).toString(16) };
    setItems([...items, newItem]);
  };

  const moveForvard = (idx) => {
    setItems((prev) => {
      const newData = [...prev];
      const l = items.length;
      if (idx === items.length - 1) return prev;
      [newData[idx], newData[idx + 1]] = [newData[idx + 1], newData[idx]];
      return newData;
    });
  };
  const moveBack = (idx) => {
    setItems((prev) => {
      const newData = [...prev];
      const l = items.length;
      if (idx === 0) return prev;
      [newData[idx], newData[idx - 1]] = [newData[idx - 1], newData[idx]];
      return newData;
    });
  };

  return (
    <div>
      <button onClick={addItem}>add item +</button>
      <div className="grid">
        <AnimateList>
          {items.map((item, idx) => (
            <div
              className="grid-item"
              style={{ background: `#${item.color}`, gridRow: `span ${item.size}` }}
              key={item.name}
              ref={createRef()}
            >
              <div>{item.name}</div>
              <div
                style={{
                  display: 'flex',
                  height: '20px',
                  fontSize: '15px',
                  lineHeight: 0,
                  gap: '4px',
                }}
              >
                <button onClick={() => moveBack(idx)}>-</button>
                <p>{idx}</p>
                <button onClick={() => moveForvard(idx)}>+</button>
              </div>
            </div>
          ))}
        </AnimateList>
      </div>
    </div>
  );
};

export default AnimateReorderList;
