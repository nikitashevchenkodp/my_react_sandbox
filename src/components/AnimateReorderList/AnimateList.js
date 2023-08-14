import React, { useEffect, useLayoutEffect, useState } from 'react';
import calculateBoundingBoxes from './helpers/calculateCoordinates';
import { usePrev } from './hooks/usePrev';

const AnimateList = ({ children }) => {
  const [newCoordinates, setNewCoordinates] = useState({});
  const [prevCoordinates, setPrevCoordinates] = useState({});
  const prevChildren = usePrev(children);

  useLayoutEffect(() => {
    const newChilredCoordinates = calculateBoundingBoxes(children);
    setNewCoordinates(newChilredCoordinates);
  }, [children, prevChildren]);

  useLayoutEffect(() => {
    const prevChilredCoordinates = calculateBoundingBoxes(prevChildren);
    setPrevCoordinates(prevChilredCoordinates);
  }, [prevChildren]);

  useEffect(() => {
    const hasPrevBoundingBox = Object.keys(prevCoordinates).length;

    if (hasPrevBoundingBox) {
      React.Children.forEach(children, (child) => {
        const domNode = child.ref.current;

        const firstBox = prevCoordinates[child.key];
        const lastBox = newCoordinates[child.key];

        if (!firstBox || !lastBox) return;
        console.log('here');
        const changeInX = firstBox.left - lastBox.left;
        const changeInY = firstBox.top - lastBox.top;

        if (changeInX || changeInY) {
          requestAnimationFrame(() => {
            // Before the DOM paints, invert child to old position
            domNode.style.transform = `translate3d(${changeInX}px,${changeInY}px, 0 )`;
            domNode.style.transition = 'transform 0s';

            requestAnimationFrame(() => {
              // After the previous frame, remove
              // the transistion to play the animation
              domNode.style.transform = '';
              domNode.style.transition = 'transform 500ms';
            });
          });
        }
      });
    }
  }, [newCoordinates, prevCoordinates, children]);

  return children;
};

export default AnimateList;
