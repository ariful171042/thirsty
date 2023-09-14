'use client';
import { cn } from '@/lib/utils';
import { useCallback, useState } from 'react';
import React from 'react';

interface HorizontalTabProps {
  tabs: string[];
  children: React.ReactNode;
  onClick?: () => void;
}

const HorizontalTab: React.FC<HorizontalTabProps> = ({
  tabs,
  children,
  onClick,
}) => {
  const [shouldOpenTab, setshouldOpenTab] = useState<number>(0);

  const handleClick = useCallback(
    (index: number) => {
      setshouldOpenTab(index);

      onClick && onClick;
    },
    [onClick]
  );
  return (
    <div className='flex flex-col gap-20'>
      {/* Tabs  */}
      <div className='flex items-center self-center'>
        {tabs?.map((tab: string, index: number) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={cn(
              'eq flex h-[4rem] w-[15rem] items-center justify-center whitespace-nowrap border border-gray px-6 py-3 text-center text-lg font-semibold tracking-widest',
              index === 0 && 'rounded-bl-2xl',
              index === tabs.length - 1 && 'rounded-tr-2xl',
              shouldOpenTab === index && 'border-dark bg-dark text-light'
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Contents */}

      <div className=''>
        {React.Children.toArray(children)?.map(
          (item: React.ReactNode, index: number) => (
            <div
              className={cn(shouldOpenTab === index ? 'block' : 'hidden')}
              key={index}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HorizontalTab;