import Link from 'next/link';

import { Navigation } from '@/lib/enums/navigation';
import { cn } from '@/lib/utils/cn';

export const Footer = ({ className }: ExtendWithClass<{}>) => (
  <footer
    className={cn(
      'flex justify-between items-center px-6 py-4 bg-background',
      className,
    )}
  >
    <p className='text-xs text-primary'>
      © 2024 Spell-Check. All rights reserved.
    </p>
    <nav className='flex gap-4 text-primary'>
      <Link
        className='text-xs hover:underline'
        href={Navigation.PRIVACY_POLICY}
      >
        Privacy Policy
      </Link>
    </nav>
  </footer>
);
