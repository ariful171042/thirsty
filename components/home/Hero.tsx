import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const plafairDisplay = Playfair_Display({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section className='wrapper section-padding h-[calc(100vh-5rem)] '>
      <div className='grid-rows-8 relative  grid h-full w-full gap-5'>
        {/* second row  */}
        <div className='grid h-[8rem]  w-full grid-cols-[30%_auto] items-center gap-20'>
          <div className='h-full w-full overflow-hidden  rounded-[0px_50px_0px_50px]'>
            <Image
              src={
                'https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              alt={''}
              width={640}
              height={360}
              className='h-full w-full object-cover'
            />
          </div>
          <div className=' flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>
              Lorem ipsum doloi
            </h2>
          </div>
        </div>

        <hr className='h-px border-gray' />

        {/* third row  */}
        <div className='grid h-[8rem] w-full grid-cols-[25%_auto_50%] gap-20'>
          <div className=' flex h-full w-full items-center'>
            <h2
              className={cn(
                plafairDisplay.className,
                'headline-1 c font-bold uppercase'
              )}
            >
              Lorem
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden  rounded-[50px_0px_55px_50px]'>
            <Image
              src={
                'https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              alt={''}
              width={640}
              height={360}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>Lorem ipsum a</h2>
          </div>
        </div>
        <hr className='h-px border-gray' />

        {/* four row  */}
        <div className='grid h-[8rem] w-full grid-cols-[40%_auto] gap-20'>
          <div className=' flex h-full w-full items-center '>
            <h2 className='headline-1 font-bold uppercase'>Lorem ipss</h2>
          </div>
          <div className='h-full w-full overflow-hidden  rounded-[0px_50px_50px_50px]'>
            <Image
              src={
                'https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              alt={''}
              width={640}
              height={360}
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        <hr className='h-px border-gray' />

        {/* fifth row  */}
        <div className='grid h-[8rem]  w-full grid-cols-[35%_auto] gap-20'>
          <div className='h-full w-full overflow-hidden  rounded-[50px_50px_50px_0px]'>
            <Image
              src={
                'https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              alt={''}
              width={640}
              height={360}
              className='h-full w-full object-cover'
            />
          </div>
          <div className=' flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>Lorem ipsum arai</h2>
          </div>
        </div>
      </div>
      <hr className='h-px border-gray' />
      {/*Packges button */}
      <Link
        href={'/#packages'}
        className='bacdrop-blur-lg eq group absolute bottom-[18%] left-[38%] z-[1] flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-dark/80 text-lg uppercase text-light shadow-2xl shadow-dark/50 hover:shadow-pink/50'
      >
        <p className='z-[3]'>Packages</p>
        {/* Filler  1*/}
        <span className='rounded-0 eq absolute left-0 right-0 top-full z-[2] h-full w-full bg-pink group-hover:top-1/2'></span>
        {/* Filler  2*/}
        <span className='rounded-0 eq absolute -top-full left-0 right-0 z-[2] h-full w-full bg-pink group-hover:top-0'></span>
      </Link>
    </section>
  );
};

export default Hero;
