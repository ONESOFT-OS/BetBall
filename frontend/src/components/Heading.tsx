import { Slot } from "@radix-ui/react-slot";
import {clsx} from "clsx";
import { ReactNode } from "react";

export interface HeadingProps{
    size?: 'sm' | 'md' |'lg' | 'xlg';
    children: ReactNode;
    asChild?: boolean;
    classname?: string;
}

export function Heading({size = 'md', children, asChild, classname}: HeadingProps){
    const Comp = asChild ? Slot : 'h2';
    return(
        <Comp 
        className={clsx(
        'text-white font-bold font-sans',
        {
            'text-lg' : size === 'sm',
            'text-xl' : size === 'md',
            'text-2xl' : size === 'lg',
            'text-4xl': size === 'xlg'

        },
        classname,
        )}
        >
        {children}
        </Comp>
    )
}



