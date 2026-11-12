'use client'

import { useEffect, useRef } from 'react';
import { useChaletStore } from '@/lib/storage/chalets';

export default function StoreInitializer({ children }: { children: React.ReactNode }) {
  const getChalets = useChaletStore((state) => state.getChalets);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      getChalets();
    }
  }, [getChalets]);

  return <div className='pt-20'>{children}</div>;
}