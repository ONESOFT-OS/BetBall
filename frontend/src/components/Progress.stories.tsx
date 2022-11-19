import { Progress, ProgressProps } from "./Progress";
import {Meta, StoryObj} from '@storybook/react';

export default{
    title: 'Components/Progress',
    component: Progress,
    args:{
        percentage: 55
    },
    argTypes:{
        children: {
            table:{
                disable:true
            }
        },
    }

} as Meta<ProgressProps>

export const Default: StoryObj<ProgressProps> ={}