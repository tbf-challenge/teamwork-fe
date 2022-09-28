import { useState, useEffect } from "react";

const useLocalStore = (key, defaultValue) => {
  // const [refreshToken, setRefreshToken] = useState(() =>
  //   localStorage.getItem("AUTH_VALUES")
  //     ? JSON.parse(localStorage.getItem("AUTH_VALUES"))
  //     : null
  // );
  const jsonValue = window.localStorage.getItem(key);

  const [value, setValue] = useState(() => {
    if (jsonValue != null) return JSON.parse(jsonValue).refreshToken;

    if (typeof defaultValue === "function") {
      return defaultValue();
    }
    return defaultValue;
  });

  useEffect(() => {
    if (jsonValue != null) {
      const val = JSON.parse(jsonValue);
      const dict = {
        ...val,
        refreshToken: value
      };
      window.localStorage.setItem(key, JSON.stringify(dict));
    }
  }, [key, value, jsonValue]);

  return [value, setValue];
};

export default useLocalStore;
