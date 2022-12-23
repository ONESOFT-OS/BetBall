import { MenuItem } from '@mui/material';
import {Meta, StoryObj} from '@storybook/react';
import  {SelectM, SelectProps} from './SelectM'

export default{
    title: 'Components/SelectM',
    component: SelectM,
    args:{
        children:[
            <MenuItem value={1}>First Select</MenuItem>,
            <MenuItem value={2}>Second Select</MenuItem>,
            <MenuItem value={3}>Third Select</MenuItem>
        ],
        defaultText: 'Default'
    },
    argTypes:{
        children: {
            table:{
                disable:true
            }
        },
    }
}as Meta<SelectProps>

export const Default: StoryObj<SelectProps> = {}