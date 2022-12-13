import React from 'react';
import {Box, Button, Icon, Paper, TextField} from "@mui/material";

interface ITableListProps {
    searchText?: string;
    showSearchInput?: boolean;
    onChangeSearchText?: (newText: string) => void;
    textNewButton?: string;
    showNewButton?: boolean;
    onClickNewButton?: () => void;
}

const Table: React.FC<ITableListProps> =  ({
    searchText = '',
    showSearchInput = false ,
    onChangeSearchText,
    textNewButton = 'Novo',
    showNewButton,
    onClickNewButton = true,
}) => {
    return (
        <Box
            height={45}
            marginX={1}
            padding={1}
            paddingX={2}
            display={"flex"}
            alignItens={'center'}
            component={Paper}
        >
            <TextField
                size="small"
                placeholder="Search"
                value={searchText}
                onChange={(evt) => onChangeSearchText?.(evt.target.value)}
            />
            <Box flex={1} justifyContent="end" display="flex">
                <Button
                    variant={'contained'}
                    color="primary"
                    disabledElevation
                    endIcon={<Icon>add</Icon>}
                >
                    {textNewButton}
                </Button>
            </Box>
        </Box>
    );
};

export { Table };