import {
    makeStyles,
} from '@material-ui/core';

// Styles =======================================
export const useStyles = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: `${theme.spacing(35)}px auto auto ${theme.spacing(40)}px`,
        gridTemplateRows: 'auto auto',
        gridTemplateAreas: `
            "user-info  user-info   .           usage-info"
            "menu       content     content     content"
        `,
        gridGap: `${theme.spacing(4)}px ${theme.spacing(2)}px`,

        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(3),

        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(4),
            gridTemplateColumns: '100%',
            gridTemplateRows: 'repeat(4, auto)',
            gridTemplateAreas: `
                "user-info"
                "usage-info"
                "menu"
                "content"
            `,
            gridGap: theme.spacing(2)
        }
    },
    userInfo: {
        gridArea: 'user-info',
    },
    userInfoContent: {
        padding: theme.spacing(1),
    },
    usageInfo: {
        gridArea: 'usage-info',
    },
    usageInfoContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    menu: {
        gridArea: 'menu',

        '& a': {
            maxWidth: '100%'
        }
    },
    content: {
        gridArea: 'content',
        padding: theme.spacing(5),
    },
    contentInner: {
        maxWidth: theme.spacing(50),
        margin: '0 auto'
    },
    fieldRow: {
        '& + &': {
            marginTop: theme.spacing(5)
        }
    },
    flexDirectionRow: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: theme.spacing(2),
    },
    contentFlexGrow: {
        flexGrow: 1,
    },
    contentInnerPayment: {
        maxWidth: theme.spacing(50),
    },
    contentPayment: {
        gridArea: 'content',
        padding: theme.spacing(0),
    },
    containerPayment: {
        display: 'grid',
        gridTemplateColumns: `${theme.spacing(35)}px auto auto ${theme.spacing(40)}px`,
        gridTemplateRows: 'auto auto',
        gridTemplateAreas: `
            "menu       content     content     content"
        `,
        gridGap: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
        paddingBottom: theme.spacing(3),

        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(4),
            gridTemplateColumns: '100%',
            gridTemplateRows: 'repeat(4, auto)',
            gridTemplateAreas: `
                "menu"
                "content"
            `,
            gridGap: theme.spacing(2)
        }
    },
    drawer: {
        width: "100%",
        flexShrink: 0,
      },
      drawerPaper: {
        width: "100%",
      },
      toolbar: theme.mixins.toolbar,
      contentDrawer: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
}));