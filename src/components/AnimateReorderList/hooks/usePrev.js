import { useEffect, useRef } from 'react';

export const usePrev = (value) => {
  const prevChildrenRef = useRef();

  useEffect(() => {
    prevChildrenRef.current = value;
  }, [value]);

  return prevChildrenRef.current;
};
