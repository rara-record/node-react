import { useState, useCallback } from 'react';

const useInput = (initialValuse: any = null) => {
  const [value, setValue] = useState(initialValuse);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};

export default useInput;
