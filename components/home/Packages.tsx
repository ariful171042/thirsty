import { data } from '@/data/packages';
import HorizontalTab from '../ui/HorizontalTab';
import SectionTitle from '../share/SectionTitle';
import PackageItem from './PackageItem';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import { packageItem } from '@/types/packageItem';

const Packages = () => {
  return (
    <section className='wrapper setion-padding' id='packages'>
      <SectionTitle title='Explore Our Beauty Packages' subTitle='Packages' />

      <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
        {/* SkinCare start */}
        <div className='lg:grid-cols grid  grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Wellness')
            .slice(0, 2)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>{' '}
        {/* SkinCare end  */}
        {/* SkinCare start */}
        <div className='lg:grid-cols grid  grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Beauty')
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        {/* SkinCare end  */}
        {/* SkinCare start */}
        <div className='lg:grid-cols grid  grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Events')
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>{' '}
        {/* SkinCare end  */}
      </HorizontalTab>
      <div className='flex justify-center'>
        <Link
          href={'/packages'}
          className={cn(buttonVariants({ variant: 'outlline' }), 'mt-20')}
        >
          View All Packages
        </Link>
      </div>
    </section>
  );
};

export default Packages;
