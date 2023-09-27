import Image from 'next/image';

const Community = () => {
  return (
    <section className='wrapper section-padding h-screen '>
      <div className='flex h-full w-full items-center justify-center '>
        {/* Main Box  */}
        <div className='relative h-[500px] w-[500px] bg-gray'>
          {/* Left  */}
          <div className='absolute -left-[25%] -top-[15%] z-[2] h-[350px] w-[250px] overflow-hidden rounded-tl-[100px] bg-purple-50'>
            <Image
              src={
                'https://images.pexels.com/photos/17236943/pexels-photo-17236943/free-photo-of-woman-hand-holding-white-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              alt='image'
              width={500}
              height={500}
              className='h-full w-full object-cover'
            />
          </div>
          {/* Mid */}
          <div className='absolute left-[50%] top-[50%] z-[3] h-[400px] w-[350px] -translate-x-1/2 -translate-y-1/2 bg-green'>
            <Image
              src={
                'https://images.pexels.com/photos/14962900/pexels-photo-14962900/free-photo-of-woman-hand-holding-coffee-near-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              alt='image'
              width={500}
              height={500}
              className='h-full w-full object-cover'
            />
          </div>
          {/* Right */}
          <div className='absolute -bottom-[15%] -right-[25%] z-[2] h-[350px] w-[250px] overflow-hidden rounded-br-[100px] bg-purple-50'>
            <Image
              src={
                'https://images.pexels.com/photos/16039871/pexels-photo-16039871/free-photo-of-basket-with-purple-flower-in-woman-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              alt='image'
              width={500}
              height={500}
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
