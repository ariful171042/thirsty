import Link from 'next/link';
import { buttonVariants } from '../ui/Button';

const Navber = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-[100] flex h-20 items-center border-b border-gray bg-white/80 backdrop-blur-lg'>
      <div className='wrapper grid grid-cols-3 gap-20 '>
        {/* left nav  */}
        <nav>
          <ul className='flex h-full items-center justify-start gap-5 '>
            <li>
              <Link href={'/#packages'} className='link-item'>
                Packages
              </Link>
            </li>
            <li>
              <Link href={'/'} className='link-item'>
                Link 2
              </Link>
            </li>
            <li>
              <Link href={'/'} className='link-item'>
                Link 3
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mid nav  */}
        <nav>
          <ul className='flex justify-center'>
            <li>
              <Link
                href={'/'}
                className='text-4xl font-bold lowercase text-pink'
              >
                Thirsty
              </Link>
            </li>
          </ul>
        </nav>
        {/* right nav  */}
        <nav>
          <ul className='flex items-center justify-end gap-5'>
            <li>
              <Link href={'/'} className='link-item'>
                Link 1
              </Link>
            </li>
            <li>
              <Link href={'/'} className='link-item'>
                Link 2
              </Link>
            </li>
            <li>
              <Link
                href={'/user/signin'}
                className={buttonVariants({
                  variant: 'valentine',
                })}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navber;
