import { ImgHTMLAttributes } from "react";
import * as Avatar from '@radix-ui/react-avatar';

export interface TeamProps extends ImgHTMLAttributes<HTMLImageElement>{
}

export function TeamImg (props: TeamProps){
    return(
            <div className="circle bg-glass-500 rounded-full w-[120px] h-[120px] flex flex-row justify-center items-center ">  
                <Avatar.Root>
                    <Avatar.Image         
                    className="AvatarImage"
                    src=""
                    alt="Pedro Duarte"/>
                    <Avatar.Fallback />
                </Avatar.Root>
            </div>
    )
}