'use client';

import { Button } from '@/components/ui/button';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <div className='flex-1 flex items-center justify-center'>
      <h2 className='text-6xl font-bold text-center'>Something went wrong!</h2>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
