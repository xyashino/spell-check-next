import Link from 'next/link';

import { Header } from '@/components/Header';
import { Logo } from '@/components/Logo';
import { PreviousButton } from '@/components/PreviousButton';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/lib/enums/navigation';

export default async function NotFound() {
  return (
    <>
      <Header>
        <Logo href={Navigation.HOME} />
        <ThemeSwitcher />
      </Header>
      <div className='flex-1 w-full space-y-6 flex items-center flex-col justify-center'>
        <h1 className='text-6xl font-bold text-center'>404 - Page Not Found</h1>
        <div className='flex space-x-4'>
          <Button asChild>
            <Link href={Navigation.HOME}>Home</Link>
          </Button>
          <PreviousButton />
        </div>
      </div>
    </>
  );
}
