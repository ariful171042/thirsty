interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <div className='mb-20 flex gap-2.5'>
      <span className=' w-3 bg-red'></span>
      <div className='flex flex-col items-start gap-2.5'>
        <span className='text-lg font-semibold uppercase tracking-[0.375em]'>
          {subTitle}
        </span>
        <h3 className='text-5xl '>{title}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
