export const saveToLocal = (data, key) => {
  const saveData = JSON.stringify(data);
  global.localStorage.setItem(key, saveData);
};

export const getFromLocal = (key) => {
  let data = global.localStorage.getItem(key);
  return JSON.parse(data);
};

export const removeFromLocal = (key) => {
  global.localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  global.localStorage.clear();
};
