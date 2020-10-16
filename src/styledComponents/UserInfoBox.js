import {
    Box,
    styled
} from '@material-ui/core';

export const UserInfoBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    alignItems: 'center',
    color: theme.palette.text.secondary
}));
;