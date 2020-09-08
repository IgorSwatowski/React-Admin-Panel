import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from '@material-ui/core/styles';
import {ListItemText} from "@material-ui/core";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';


import PaymentHistory from 'components/molecules/PaymentHistory.js';
import CollapseSidebarUserItems from 'components/atoms/CollapseSidebarUserItems.js';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    }},
  text: {
    color: 'black',
  },
  blockList: {
    display: 'block',
    marginLeft: '-60px'
  },
  inlineItemsList: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  styleIcons: {
    marginTop: '-5px',
  },
  proVersionMember: {
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3', 
    color: '#0B79D0',
    borderRadius: '55px',
    fontSize: '12px',
  },
  premiumVersionMember: {
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #4CAF50',
    color: '#4CAF50',
    borderRadius: '55px',
    fontSize: '12px',
  },
  basicVersionMember: {
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #F44336;',
    color: '#F44336',
    borderRadius: '55px',
    fontSize: '12px',
  }
}));

function Billings() {
  const classes = useStyles();

  const handleClick = event => event.preventDefault();


  return (
    <Container 
      maxWidth='lg'>
      <form>
      <div display="flex" justifyContent="center" alignItems="center">
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: '204px'}}>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Avatar>
        </ListItemAvatar>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <ListItemText primary="John Doe" secondary="Manage billing information and view receipts" />
          <Chip size="small" label="PRO" style={{background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3', marginTop: '4px', color: '#2196F3', marginRight: '10px', marginLeft: '-200px'}}/>
          <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '5px'}}>
            <Link
                onClick={handleClick}
                style={{color: 'black', textDecoration: 'none'}}
                to="/billings"
              >
              / Billing
            </Link>
          </Breadcrumbs>
        </div>
      </ListItem>
      </div>
      </div>

      <div style={{position: 'absolute', marginLeft: '240px'}}>
        <CollapseSidebarUserItems />
      </div>

      <div display="flex" justifyContent="center" alignItems="center">
      <Box width="45%" style={{marginLeft: '440px'}}>
      <Paper variant="outlined" style={{padding: "60px"}}>
          <ListItemText>Your Plan</ListItemText>
            <ListSubheader style={{marginTop: '-40px', marginLeft: '310px'}}>
              <Button className={classes.proVersionMember}>PRO</Button>
            </ListSubheader>
            <div style={{width: '390px', marginTop: '12px'}}>
            <LinearProgress variant="determinate" style={{background: '#2196F3', opacity: '0.9'}}/>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <ListItemText secondary="Minutes used this billing cycle"/>
                <ListItemText primary="38.9/2000.0" style={{marginRight: '-115px'}}/>
              </div>
          </div>
          <Button variant="outlined" style={{marginTop: '20px'}}>Change</Button>
          <Button style={{marginTop: '20px', marginLeft: '20px'}}>Cancel Subscription</Button>
          <Divider style={{marginTop: '40px'}}/>
          <ListItemText style={{marginTop: '25px'}}>Payment</ListItemText>
          <ListSubheader style={{marginLeft: '-15px'}}>You can use a Credit Card or a bank Account.</ListSubheader>
          <ListSubheader style={{marginLeft: '-15px', fontSize: '13px'}}>Payment Method on file</ListSubheader>
          <ListItemText>Visa Ending in 0218 expiring 4/2020</ListItemText>
          <Button variant="outlined" style={{marginTop: '20px'}} href="/card">Edit</Button>
          <Button style={{marginTop: '20px', marginLeft: '20px'}}>Remove</Button>
      </Paper>
      </Box>
      
      <PaymentHistory/>
      </div>
    </form>
    </Container>
  );
}

export default Billings;
