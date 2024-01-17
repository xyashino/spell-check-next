'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export const PreviousButton = () => {
  const { back } = useRouter();
  return (
    <Button variant='secondary' onClick={back}>
      Go back
    </Button>
  );
};
