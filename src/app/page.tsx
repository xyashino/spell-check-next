import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Header className='flex-row-reverse'>
        <ThemeSwitcher />
      </Header>
      <div className='flex-1 container bg-background flex flex-col justify-center items-center px-6 py-4'>
        <h1 className='text-3xl w-full sm:w-auto sm:flex-row md:text-5xl lg:text-6xl flex flex-col px-6 font-bold text-center mb-8'>
          <span className='mr-auto px-4 rounded-xl py-4'>Welcome to</span>
          <span className='whitespace-nowrap ml-auto bg-foreground text-background px-4 rounded-xl py-4'>
            Spell-Check
          </span>
        </h1>
        <p className='text-lg text-center text-accent-foreground mb-8'>
          Your ultimate tool for checking and correcting spelling errors in your
          text.
        </p>
        <div className='flex gap-4'>
          <Button>Try It Now</Button>
          <Button variant='secondary'>I have an account</Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
