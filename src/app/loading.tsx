import { LoadingIcon } from '@/components/LoadingIcon';

export default function Loading() {
  return (
    <div className='flex-1 flex items-center justify-center w-full h-full'>
      <LoadingIcon className='text-9xl' />
    </div>
  );
}
