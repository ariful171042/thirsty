import HorizontalTab from '../share/HorizontalTab';
import SectionTitle from '../share/SectionTitle';

const Packages = () => {
  return (
    <section className='wrapper setion-padding' id='packages'>
      <SectionTitle title='Explore Our Beauty Packages' subTitle='Packages' />

      <HorizontalTab tabs={['Skin Care', 'Hair Care', 'Makeup']}>
        <p>Skin Care</p>
        <p>Tab 2 Content</p>
        <p>Tab 3 Content</p>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
