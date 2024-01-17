import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils/cn';

export const Header = ({
  children,
  className,
}: ExtendWithClass<PropsWithChildren>) => {
  return (
    <header
      className={cn(
        'flex justify-between items-center py-4 px-6 bg-background',
        className,
      )}
    >
      {children}
    </header>
  );
};
