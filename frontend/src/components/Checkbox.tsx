import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'phosphor-react'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps{}

export function Checkbox(props: CheckboxProps){
    return(
        <CheckboxPrimitive.Root className=" w-6 h-6 p-[2px] bg-green-700 rounded " {...props}>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight ="bold" className=" h-5 w-5 text-white" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}