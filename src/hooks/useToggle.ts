import { useState } from 'react';

export default function useToggle(value: boolean = false) {
  const [state, setState] = useState(value);

  function toggle() {
    setState(!state);
  }

  return [state, toggle] as const;
}
