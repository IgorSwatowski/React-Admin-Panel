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
      maxWidth="lg">
        <Box display="flex" flexWrap="wrap" mt={15}>
          <Box display="flex" flexGrow={1}>
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

        <Grid container direction="row" justifyContent="center" spacing={0}>
          <Grid item xs={12} sm={2}>
            <CollapseSidebarUserItems/>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Paper>
              <Box p={7}>
                <Grid item xs={12} sm={12}>
                  <Box display="flex" flexDirection="row">
                    <ListItemText>Your Plan</ListItemText>
                    <Button className={classes.proVersionMember}>PRO</Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box mt={3} width="100%" flexWrap="wrap">
                    <LinearProgress variant="determinate" style={{opacity: '0.9'}}/>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box display="flex" flexDirection="row" flexWrap="wrap">
                    <ListItemText secondary="Minutes used this billing cycle"/>
                    <ListItemText primary="38.9/2000.0"/>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box mt={5}>
                    <Button variant="outlined">Change</Button>
                    <Button>Cancel Subscription</Button>
                  </Box>
                </Grid>

                <Box mt={5}>
                  <Divider/>
                </Box>
                
                <Grid item xs={12} sm={12}>
                  <Box mt={6}>
                    <ListItemText>Payment</ListItemText>
                    <Box mt={2}>
                      <Typography color="textSecondary" variant="subtitle1">You can use a Credit Card or a bank Account.</Typography>
                    </Box>
                    <Box mt={2} mb={2}>
                      <Typography color="textSecondary" variant="subtitle2" >Payment Method on file</Typography>
                    </Box>
                  </Box>
                </Grid>

                <ListItemText>Visa Ending in 0218 expiring 4/2020</ListItemText>

                <Grid item xs={12} sm={12}>
                  <Box mt={3}>
                    <Button variant="outlined" href="/card">Edit</Button>
                    <Button>Remove</Button>
                  </Box>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <PaymentHistory/>
      </Container>
  );
}

export default Billings;
