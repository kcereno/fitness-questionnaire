import { useEffect } from 'react';

function useKeyPress(targetKey: string, callback: () => void) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const pressedKey = event.key;
      if (pressedKey === targetKey) {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [targetKey, callback]);
}

export default useKeyPress;
