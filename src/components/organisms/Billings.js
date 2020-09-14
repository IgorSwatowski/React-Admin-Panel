import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';
import {ListItemText} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import PaymentHistory from 'components/molecules/PaymentHistory.js';
import CollapseSidebarUserItems from 'components/atoms/CollapseSidebarUserItems.js';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    }},
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
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          <Box display="flex" justifyContent="center" p={1} flexGrow={1} mx="auto">
            <Box p={1} mt={1}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>            
            </Box>

            <Box p={1}>
              <Breadcrumbs aria-label="breadcrumb">
              <Link 
                    color='textPrimary'
                    underline='none' 
                    variant="h6" 
                  > 
                  John Doe
                </Link>
              <Link 
                    onClick={handleClick} 
                    color='textPrimary'
                    to="/billings" 
                    underline='none' 
                    component="button"
                    variant="h6" 
                  > 
                  Billing
                </Link>
              </Breadcrumbs>
              <Typography variant="body1" color="textSecondary">
                Manage billing information and view receipts
              </Typography>
            </Box>
          </Box>
        </Box>

        <Grid container direction="row" justify="center" spacing={0}>
        <Grid item xs={12} sm={2}>
          <CollapseSidebarUserItems/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Box p={5}>
              <Box display="flex" flexDirection="row">
                <ListItemText>Your Plan</ListItemText>
                <Button className={classes.proVersionMember}>PRO</Button>
              </Box>
                <Box mt={3}>
                  <LinearProgress variant="determinate" style={{opacity: '0.9'}}/>
                </Box>
                <Box display="flex" flexDirection="row">
                  <ListItemText secondary="Minutes used this billing cycle"/>
                  <ListItemText primary="38.9/2000.0"/>
                </Box>

              <Box mt={5}>
                <Button variant="outlined">Change</Button>
                <Button>Cancel Subscription</Button>
              </Box>

              <Box mt={5}>
                <Divider/>
              </Box>

              <Box mt={6}>
                <ListItemText>Payment</ListItemText>
                <Box mt={2}>
                  <Typography color="textSecondary" variant="subtitle1">You can use a Credit Card or a bank Account.</Typography>
                </Box>
                <Box mt={2} mb={2}>
                  <Typography color="textSecondary" variant="subtitle2" >Payment Method on file</Typography>
                </Box>
              </Box>

              <ListItemText>Visa Ending in 0218 expiring 4/2020</ListItemText>

              <Box mt={3}>
                <Button variant="outlined" href="/card">Edit</Button>
                  <Button>Remove</Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

        <PaymentHistory/>
      </Container>
  );
}

export default Billings;
