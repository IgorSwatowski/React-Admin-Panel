import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import SaveAltRoundedIcon from '@material-ui/icons/SaveAltRounded';
import Avatar from "@material-ui/core/Avatar";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CollapseSidebarUserItems from "./CollapseSidebarUserItems";
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import Collapse from "@material-ui/core/Collapse";
import PolymerRoundedIcon from '@material-ui/icons/PolymerRounded';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            React Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <ListItem>
            <ListItemAvatar>
              <Avatar style={{background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3'}}>
                <PolymerRoundedIcon style={{color: '#2196F3'}}/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="SIMPLE" secondary="Form Dashboard" />
        </ListItem>
        <List>
          <ListSubheader className={classes.leftFloatSubheader}>
            Menu
          </ListSubheader>
          {[
            "Dashboard",
            "People",
            "Projects",
            "Calendar",
            "Documents",
            "Reports"
          ].map((text, index) => (
            <ListItem button key={text}>
              {index === 0 && (
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
              )}
              {index === 1 && (
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
              )}
              {index === 2 && (
                <ListItemIcon>
                  <FolderOpenIcon />
                </ListItemIcon>
              )}
              {index === 3 && (
                <ListItemIcon>
                  <CalendarTodayIcon />
                </ListItemIcon>
              )}
              {index === 4 && (
                <ListItemIcon>
                  <InsertDriveFileIcon />
                </ListItemIcon>
              )}
              {index === 5 && (
                <ListItemIcon>
                  <SaveAltRoundedIcon />
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <ListSubheader className={classes.leftFloatSubheader}>
          Profile
        </ListSubheader>
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            <ListItemText primary={"John Doe"} secondary={"UI Developer"} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={open}>
            <CollapseSidebarUserItems />
          </Collapse>
        </List>

        <List>
          <ListItem>
            <ListItemIcon>
              <PowerSettingsNewRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}