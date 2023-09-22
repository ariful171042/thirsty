import { packageItem } from '@/types/packageItem';
import React from 'react';
import SectionTitle from './share/SectionTitle';
import PackageItem from './home/PackageItem';
import HorizontalTab from './ui/HorizontalTab';
import { data } from '@/data/packages';

const AllPackages = () => {
  return (
    <section className='wrapper section-padding min-h-screen'>
      <SectionTitle title='Explore Our Beauty Packages' subTitle='Packages' />

      <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
        {/* SkinCare start */}
        <div className='lg:grid-cols grid  grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Wellness')
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
    </section>
  );
};

export default AllPackages;
