import { useState, useCallback } from 'react';

const useInput = (initialValuse: any = null) => {
  const [value, setValue] = useState(initialValuse);
  const handler = useCallback((value: any) => {
    setValue(value);
  }, []);
  return [value, handler];
};

export default useInput;
