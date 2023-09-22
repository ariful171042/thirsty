'use client';

import { cn } from '@/lib/utils';
import React, { useCallback, useState } from 'react';

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
  const [shouldOpenTab, setShouldOpenTab] = useState<number>(0);

  const handleClick = useCallback(
    (index: number) => {
      setShouldOpenTab(index);

      onClick && onClick;
    },
    [onClick]
  );

  return (
    <div className='flex flex-col gap-20'>
      {/* TABS */}
      <div className='flex items-center self-center'>
        {tabs?.map((tab: string, index: number) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={cn(
              'eq flex h-[4rem] w-[15rem] items-center justify-center whitespace-nowrap border border-gray px-6 py-3 text-center text-lg font-semibold uppercase tracking-widest',
              shouldOpenTab === index && 'border-dark bg-dark text-light',
              index === 0 && 'rounded-bl-2xl',
              index === tabs.length - 1 && 'rounded-tr-2xl'
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENTS */}
      <div className='w-full'>
        {React.Children.toArray(children)?.map(
          (item: React.ReactNode, index: number) => (
            <div
              key={index}
              className={cn(shouldOpenTab === index ? 'block' : 'hidden')}
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
