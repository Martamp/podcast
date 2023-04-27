export const saveDataToLocalStorage = (key, value) => {
  const today = new Date().getTime();
  const data = { value: value, timestamp: today };

  localStorage.setItem(key, JSON.stringify(data));
};

export const getDataFromLocalStorage = (key, expirationInHours) => {
  const data = JSON.parse(localStorage.getItem(key));
  const expiration = expirationInHours * 60 * 60 * 1000;
  const today = new Date().getTime();

  if (data && today - data.timestamp < expiration) {
    return data.value;
  }
  localStorage.removeItem(key);

  return null;
};
