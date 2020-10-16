"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _core = require("@material-ui/core");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Styles =======================================
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    container: _defineProperty({
      display: 'grid',
      gridTemplateColumns: "".concat(theme.spacing(35), "px auto auto ").concat(theme.spacing(40), "px"),
      gridTemplateRows: 'auto auto',
      gridTemplateAreas: "\n            \"user-info  user-info   .           usage-info\"\n            \"menu       content     content     content\"\n        ",
      gridGap: "".concat(theme.spacing(4), "px ").concat(theme.spacing(2), "px"),
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(3)
    }, theme.breakpoints.down('sm'), {
      paddingTop: theme.spacing(4),
      gridTemplateColumns: '100%',
      gridTemplateRows: 'repeat(4, auto)',
      gridTemplateAreas: "\n                \"user-info\"\n                \"usage-info\"\n                \"menu\"\n                \"content\"\n            ",
      gridGap: theme.spacing(2)
    }),
    userInfo: {
      gridArea: 'user-info'
    },
    userInfoContent: {
      padding: theme.spacing(1)
    },
    usageInfo: {
      gridArea: 'usage-info'
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
      padding: theme.spacing(5)
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
      marginBottom: theme.spacing(2)
    },
    contentFlexGrow: {
      flexGrow: 1
    },
    contentInnerPayment: {
      maxWidth: theme.spacing(50)
    },
    contentPayment: {
      gridArea: 'content',
      padding: theme.spacing(0)
    },
    containerPayment: _defineProperty({
      display: 'grid',
      gridTemplateColumns: "".concat(theme.spacing(35), "px auto auto ").concat(theme.spacing(40), "px"),
      gridTemplateRows: 'auto auto',
      gridTemplateAreas: "\n            \"menu       content     content     content\"\n        ",
      gridGap: "".concat(theme.spacing(4), "px ").concat(theme.spacing(2), "px"),
      paddingBottom: theme.spacing(3)
    }, theme.breakpoints.down('sm'), {
      paddingTop: theme.spacing(4),
      gridTemplateColumns: '100%',
      gridTemplateRows: 'repeat(4, auto)',
      gridTemplateAreas: "\n                \"menu\"\n                \"content\"\n            ",
      gridGap: theme.spacing(2)
    }),
    containerFullWidth: _defineProperty({
      display: 'grid',
      gridTemplateColumns: "auto",
      gridTemplateRows: 'auto auto auto',
      gridTemplateAreas: "\n            \"content\"\n        ",
      gridGap: "".concat(theme.spacing(4), "px ").concat(theme.spacing(2), "px"),
      paddingBottom: theme.spacing(3)
    }, theme.breakpoints.down('sm'), {
      paddingTop: theme.spacing(4),
      gridTemplateColumns: '100%',
      gridTemplateRows: 'repeat(4, auto)',
      gridTemplateAreas: "\n                \"content\"\n            ",
      gridGap: theme.spacing(2)
    }),
    drawer: {
      width: "100%",
      flexShrink: 0
    },
    drawerPaper: {
      width: "100%"
    },
    toolbar: theme.mixins.toolbar,
    contentDrawer: {
      flexGrow: 1,
      backgroundColor: theme.palette.background["default"],
      padding: theme.spacing(3)
    }
  };
});
exports.useStyles = useStyles;