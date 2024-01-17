'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Theme } from '@/lib/enums/theme';
import { cn } from '@/lib/utils/cn';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export const ThemeSwitcher = ({ className }: ExtendWithClass<{}>) => {
  const { setTheme, theme } = useTheme();
  const handleThemeChange = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
  };
  return (
    <Button
      size='icon'
      variant='ghost'
      className={cn('relative', className)}
      onClick={handleThemeChange}
    >
      <SunIcon className='absolute transition-all size-4 dark:scale-0 scale-100 rotate-0 dark:-rotate-90' />
      <MoonIcon className='absolute transition-all size-4 dark:scale-100 scale-0 -rotate-90 dark:rotate-0' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};
