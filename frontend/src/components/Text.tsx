import { Slot } from "@radix-ui/react-slot";
import {clsx} from "clsx";
import { ReactNode } from "react";

export interface TextProps{
    size?: 'sm' | 'md' | 'base' |'lg' | '2lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Text({size = 'md', children, asChild, className}: TextProps){
    const Comp = asChild ? Slot : 'span';
    return(
        <Comp 
        className={clsx(
        'text-white font-sans',
        {
            'text-xs'   : size === 'sm',
            'text-sm'   : size === 'md',
            'text-base' : size === 'base',
            'text-md'   : size === 'lg',
            'text-xl'   : size === '2lg',
        },
        className,
        )}
        >
        {children}
        </Comp>
    )
}