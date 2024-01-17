import Link from 'next/link';

import { Navigation } from '@/lib/enums/navigation';
import { cn } from '@/lib/utils/cn';

interface BaseLogoProps {
  className?: string;
  href?: string | Navigation;
}

export const Logo = ({ href, className }: BaseLogoProps) => {
  const isLink = href !== undefined;

  const Logo = (
    <p
      className={cn(
        'whitespace-nowrap text-2xl font-extrabold bg-foreground text-background px-5  drop-shadow py-1 select-none',
        className,
      )}
    >
      Spell-Check
    </p>
  );

  if (isLink) return <Link href={href}>{Logo}</Link>;
  return Logo;
};
