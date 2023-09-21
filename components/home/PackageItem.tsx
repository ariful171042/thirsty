import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { formateCurrency } from '@/utils/formatCurrency';

interface PackageItemProps {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
}

const PackageItem: React.FC<PackageItemProps> = ({
  id,
  title,
  image,
  category,
  description,
  price,
}) => {
  console.log(description);
  return (
    <div className='flex w-full flex-col gap-5 '>
      <Link
        href={`/packages/${id}`}
        className='group h-[15rem] w-full overflow-hidden rounded-2xl border border-gray '
      >
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className='eq brightness-99 h-full w-full object-cover group-hover:scale-105 group-hover:brightness-100'
          priority
        />
      </Link>

      <div className='eq flex w-full flex-col gap-2.5 rounded-2xl border-gray bg-gray/25 p-5  hover:bg-gray/50'>
        <span className='text-xs font-bold uppercase tracking-[0.375em] text-green '>
          {category}
        </span>
        <h4 className='text-2xl'>{title}</h4>
        <hr />
        <p className='text-dark/75'>{description}</p>
        <div className='flex justify-between gap-2.5'>
          <p>{formateCurrency(price)}</p>
          <Link href={`/packages/${id}`} className={buttonVariants()}>
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
