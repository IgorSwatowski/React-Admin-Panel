import React from "react";
import PropTypes from "prop-types";
import {Drawer} from "@material-ui/core";
import {Hidden} from "@material-ui/core";
import {ListItem} from "@material-ui/core";
import {ListItemIcon} from "@material-ui/core";
import {ListItemText} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import PolymerRoundedIcon from '@material-ui/icons/PolymerRounded';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import SaveAltRoundedIcon from '@material-ui/icons/SaveAltRounded';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import CollapseSidebarUserItem from "components/atoms/CollapseSidebarUserItems.js";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  nameOfAdminPanel: {
    position: "absolute",
    textDecoration: 'none',
    color: '#2196F3',
    fontFamily: 'Arial',
    fontSize: '13px',
  },
  leftFloatSubheader: {
    float: "left",
    position: "relative",
    top: "10px"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
        <List className={classes.nameOfAdminPanel}>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3'}}>
                <PolymerRoundedIcon style={{color: '#2196F3'}}/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="SIMPLE" secondary="Form Dashboard" />
        </ListItem>
        </List>
        <div className={classes.toolbar} />
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
            <CollapseSidebarUserItem/>
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
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
          <MenuIcon />
        </IconButton>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}></main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func
};

export default ResponsiveDrawer;
