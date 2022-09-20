import { useCallback, useState } from 'react';

type UseToggleResult = [boolean, () => void]

export const useToggle = (initialState = false): UseToggleResult => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState(prev => !prev), [setState]);

  return [state, toggle];
};
