import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  CssBaseline,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  Avatar,
  Collapse,
  Typography,
} from '@material-ui/core';

//Icons ========================================
import {
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
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
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
            <ListItemText primary={"John Doe"} secondary={"Front End"} />
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
        <List>
          <ListItem>
          <Typography variant="caption">
            (C) 2020 All Rights Reserved. This is the Admin Theme built with Material UI, React 16 (latest) and NPM. 
            Designed and implemented by Igor Swatowski
          </Typography>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}