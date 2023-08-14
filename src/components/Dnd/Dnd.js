import React, { useRef, useState } from 'react';
import './Dnd.scss';

const defaultData = [
  { title: 'group 1', items: ['1', '2', '3'] },
  { title: 'group 2', items: ['4', '5'] },
  //   { title: 'group 3', items: ['7', '8'] },
];

const Dnd = () => {
  const [data, setData] = useState(defaultData);

  const [currentItem, setCurrentitem] = useState(null);
  const [draggingNode, setDraggingNode] = useState(null);

  const handleDragStart = (e, current) => {
    e.target.style.opacity = '0';
    setCurrentitem(current);
    setDraggingNode(e.target);
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1';
    setDraggingNode(null);
  };

  const handleDragOver = (e, current) => {
    // e.preventDefault();
    if (!current || (currentItem.group === current.group && currentItem.idx === current.idx)) return;
  };

  const handleDragLeave = (e) => {
    e.target.style.background = '';
    e.target.style.marginBottom = ``;
  };

  const dragOverParent = (e, groupIdx) => {
    e.preventDefault();
    if (data[groupIdx].items.length) return;
    console.log('onDrafOver parent');
  };

  const parentDrophandler = (e, groupIdx) => {
    e.preventDefault();
    e.target.style.background = '';
    if (data[groupIdx].items.length) return;
    setData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData));
      const movedItem = newData[currentItem.group].items.splice(currentItem.idx, 1);
      newData[groupIdx].items = [movedItem];
      return newData;
    });
  };

  const handleDrop = (e, current) => {
    e.preventDefault();
    e.target.style.background = '';
    e.target.style.marginBottom = ``;

    setData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData));
      const itemToDelete = newData[currentItem.group].items.splice(currentItem.idx, 1);
      newData[current.group].items.splice(current.idx, 0, itemToDelete);
      return newData;
    });
  };

  return (
    <div className="drag-n-drop">
      {data.map((group, groupIdx) => {
        return (
          <div
            className="dnd-group"
            style={{ transition: '0.5s' }}
            key={groupIdx}
            onDragOver={(e) => dragOverParent(e, groupIdx)}
            onDrop={(e) => parentDrophandler(e, groupIdx)}
            // onDragLeave={dragLeaveParent}
          >
            <div className="dnd-group-title">{group.title}</div>
            {group.items.map((item, itemIdx) => {
              return (
                <div
                  style={{ transition: '0.5s' }}
                  className="dnd-item"
                  key={itemIdx}
                  draggable
                  onDragStart={(e) => handleDragStart(e, { group: groupIdx, idx: itemIdx })}
                  onDragEnd={handleDragEnd}
                  onDragOver={(e) => handleDragOver(e, { group: groupIdx, idx: itemIdx })}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, { group: groupIdx, idx: itemIdx })}
                >
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Dnd;
