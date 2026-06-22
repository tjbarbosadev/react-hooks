import { useEffect, useState } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

function getSize() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  } else {
    return { width: -1, height: -1 };
  }
}

export default function useWindowSize() {
  const [size, setSize] = useState<WindowSize | null>(null);

  useEffect(() => {
    function handleResize() {
      setSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function between(min: number, max: number) {
    if (!size) return false;
    return size.width >= min && size.width <= max;
  }

  const dimensions = {
    sm: between(641, 768),
    md: between(769, 1024),
    lg: between(1025, 1280),
    xl: between(1281, 1536),
    '2xl': between(1537, Infinity),
  };

  const orientation = Object.entries(dimensions).filter((el) => el[1]);

  return orientation[0]?.[0];
}
