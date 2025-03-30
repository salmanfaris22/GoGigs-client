export const setTempData = (key, value) => {
    const expiry = Date.now() + 10 * 60 * 1000; // 2 minutes from now
    const tempData = { value, expiry };
    sessionStorage.setItem(key, JSON.stringify(tempData));
  };
  
export const getTempData = (key) => {
    const storedItem = sessionStorage.getItem(key);
    if (!storedItem) return null;
  
    const { value, expiry } = JSON.parse(storedItem);
    if (Date.now() > expiry) {
      sessionStorage.removeItem(key);
      return null; // Data expired
    }
    return value;
  };