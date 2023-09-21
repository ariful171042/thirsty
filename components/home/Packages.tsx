import { data } from '@/data/packages';
import HorizontalTab from '../share/HorizontalTab';
import SectionTitle from '../share/SectionTitle';
import PackageItem from './PackageItem';

const Packages = () => {
  return (
    <section className='wrapper setion-padding' id='packages'>
      <SectionTitle title='Explore Our Beauty Packages' subTitle='Packages' />

      <HorizontalTab tabs={['SkinCare', 'SkinCare', 'Makeup']}>
        {/* SkinCare start */}
        <div className='lg:grid-cols grid  grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'SkinCare')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>{' '}
        {/* SkinCare end  */}
        {/* SkinCare start */}
        <div className='lg:grid-cols grid  grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'SkinCare')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>{' '}
        {/* SkinCare end  */}
        {/* SkinCare start */}
        <div className='lg:grid-cols grid  grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Makeup')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>{' '}
        {/* SkinCare end  */}
      </HorizontalTab>
    </section>
  );
};

export default Packages;
