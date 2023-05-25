import { useState } from 'react';

export const useCookie = (key: string, initialValue: string, numberOfDays = 30) => {
  const getItem = (key: string) =>
    document.cookie.split('; ').reduce((total, currentCookie) => {
      const item = currentCookie.split('=');
      const storedKey = item[0];
      const storedValue = item[1];

      return key === storedKey ? decodeURIComponent(storedValue) : total;
    }, '');

  const setItem = (value: string) => {
    try {
      const now = new Date();
      now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);
      setCookieValue(value);
      document.cookie = `${key}=${value};     expires=${now.toUTCString()}; path=/`;
    } catch (_error) {
      new Error('Error setting cookie');
    }
  };

  const removeItem = (key: string) => {
    try {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
      setCookieValue('');
    } catch (_error) {
      new Error('Error removing cookie');
    }
  };

  const [cookie, setCookieValue] = useState<string>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      return getItem(key) ?? initialValue;
    } catch (_error) {
      new Error('Error getting cookie');

      return initialValue;
    }
  });

  return [cookie, setItem, removeItem] as const;
};
