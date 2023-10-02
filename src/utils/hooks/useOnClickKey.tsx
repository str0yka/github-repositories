import { useEffect } from 'react';

export const useOnClickKey = (handler: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      handler(event);
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);
};
