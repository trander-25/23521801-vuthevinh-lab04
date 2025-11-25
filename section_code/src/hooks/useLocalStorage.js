import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Initialize state with a function that reads from localStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get item from localStorage
      const item = window.localStorage.getItem(key);
      
      // Parse and return if exists, otherwise return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  // Create a wrapped setter function
  const setValue = (value) => {
    try {
      // Allow value to be a function (like useState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Update state
      setStoredValue(valueToStore);
      
      // Update localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  };

  // Return array like useState
  return [storedValue, setValue];
}

export default useLocalStorage;
