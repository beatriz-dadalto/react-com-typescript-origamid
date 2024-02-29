import React from "react";

const useLocalStorage = (
  key: string,
  incial: string,
): [string, React.Dispatch<React.SetStateAction<string>>] => {

  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : incial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState] as const;
};

export default useLocalStorage;