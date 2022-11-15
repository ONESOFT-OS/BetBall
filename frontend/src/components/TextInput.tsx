import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";



export interface TextInputRootProps{
    children: ReactNode;
    valid?: boolean
}

function TextInputRoot({valid = true, children}: TextInputRootProps){
    return(
        <div className={clsx(" flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full  text-white text-xs placeholder:text-gray-900",
        {   "focus-within:ring-2 ring-green-500": valid === true,
            "border-2 border-red-800 ": valid === false,
        })}>
            {children}
        </div>
    )
}

export interface TextInputIconProps{
    children: ReactNode;
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputIcon(props: TextInputIconProps){
    return(
        <Slot className=" w-6 h-6 text-white">
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{
}

function TextInputInput(props: TextInputInputProps){
    return(
        <input
            className="bg-transparent flex-1 text-white text-xs placeholder:text-gray-500 outline-none "
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput ={
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon

}