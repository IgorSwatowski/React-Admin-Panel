import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  Avatar,
  Collapse,
} from '@material-ui/core';

//Icons ========================================
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  FolderOpen as FolderOpenIcon,
  CalendarToday as CalendarTodayIcon,
  InsertDriveFile as InsertDriveFileIcon,
  SaveAltRounded as SaveAltRoundedIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  PowerSettingsNewRounded as PowerSettingsNewRoundedIcon,
  PolymerRounded as PolymerRoundedIcon,
} from '@material-ui/icons';

//Components ========================================
import CollapseSidebarUserItems from "./CollapseSidebarUserItems";

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
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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