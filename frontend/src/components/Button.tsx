import { Slot } from "@radix-ui/react-slot";
import {clsx} from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChild?: boolean;
    mode?: string;
}

export function Button({ mode = 'default', children, asChild, className, ...props}: ButtonProps){
    const Comp = asChild ? Slot : 'button';
    return(
        <Comp 
        className={clsx(
        'font-semibold text-white', 

       {'py-3 px-4 bg-green-700 rounded-xl text-sm w-full transition-colors hover:bg-green-900 focus:ring-2 ring-white': mode === 'default', 

        'bg-black bg-opacity-50  ring-2 ring-green-700 hover:bg-opacity-20 hover:bg-green-700 rounded-full px-4 py-2': mode === 'closer'}

        ,className
        )}
        {...props}
        >
        {children}
        </Comp>
    )
}