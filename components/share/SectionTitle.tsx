interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <div className="flex gap-2.5">
      <span className=" w-3 bg-red"></span>
      <div className="flex flex-col gap-2.5 items-start">
        <span className="uppercase text-lg tracking-[0.375em] font-semibold">
          {subTitle}
        </span>
        <h3 className="text-5xl ">{title}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
