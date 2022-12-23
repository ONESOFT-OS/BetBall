import { InputHTMLAttributes } from "react";
import clsx from 'clsx';

export interface DateProps extends InputHTMLAttributes<HTMLInputElement>{
    mode?: string 
    classname?: string
}
/* 
 * Imput do tipo Date ou Time do mesmo estilo 
 */
export function InputDate({className, mode = "date", ...props}: DateProps){
  return (
    <input
        className = {clsx("bg-gray-900 bg-opacity-30 text-white text-sm rounded-lg p-2.5 focus:ring-green-700 focus:ring-[1px]",
                            className)}
        {...props}
        required
        type = {mode}
    />
  );
};