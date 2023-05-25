'use client';

import { useCookie } from '@/hooks/useCookie';
import { useCallback, useEffect, useState } from 'react';

export const useOwnToken = () => {
  const [token, setToken, removeToken] = useCookie('token', '');
  const [isOwnTokenSelected, setUseOwnToken] = useState<boolean>(false);
  const toggle = useCallback(() => {
    setUseOwnToken(state => {
      if (state) {
        removeToken('token');
      }

      return !state;
    });
  }, [isOwnTokenSelected]);

  useEffect(() => {
    if (!token) {
      setUseOwnToken(false);
    } else {
      setUseOwnToken(true);
    }
  }, [setUseOwnToken, token]);

  return {
    token,
    setToken,
    isOwnTokenSelected,
    setUseOwnToken,
    toggle,
  };
};
