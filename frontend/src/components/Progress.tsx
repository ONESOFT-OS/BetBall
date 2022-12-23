import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import clsx from 'clsx';

export interface ProgressProps{
    classname?: string
    percentage: number
}

export function Progress(props: ProgressProps){

  return (
    <ProgressPrimitive.Root className={ clsx("relative overflow-hidden bg-gray-800 rounded-full w-[300px] h-[25px]", props.classname)} style={{transform: `translateZ(0)`}}>
      <ProgressPrimitive.Indicator
        className="bg-green-700 w-full h-full transition transform ease-cubic-bezier(0.65, 0, 0.35, 1) duration-300"
        style={{ transform: `translateX(-${100 - props.percentage}%)` }}
      />
    </ProgressPrimitive.Root>
    
  );
};
