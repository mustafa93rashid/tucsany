// components/AOSProvider.tsx
'use client';

import { useEffect } from 'react';
import { initAOS } from './aos-init';

const AOSProvider = () => {
  useEffect(() => {
    initAOS();
  }, []);

  return null;
};

export default AOSProvider;
