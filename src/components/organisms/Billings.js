import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';
import {ListItemText} from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


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

  return (
      <Container maxWidth="lg">
        <Box display="flex" flexWrap="wrap" mt={15} pb={2}>
          <Box display="flex" flexGrow={1} alignItems="center" css={{ height: 100 }}>
            <Box p={1} mt={1}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>            
            </Box>

            <Box p={1}>
              <Breadcrumbs aria-label="breadcrumb">
                  <Typography variant="h6" display="block" color="textSecondary">
                    John Doe
                  </Typography>
                  <Typography variant="h6" color="textPrimary">
                    Billing
                  </Typography>
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
            <Card variant="outlined">
              <CardContent>
                <Box p={5}>
                <Grid container spacing={3}>
                  <Grid item xs>
                      
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" flexDirection="row">
                      <ListItemText>Your Plan</ListItemText>
                      <Button className={classes.proVersionMember}>PRO</Button>
                    </Box>
                    <Box>
                      <Box pb={3} width="100%" flexWrap="wrap" mt={3}>
                        <LinearProgress variant="determinate"/>
                      </Box>
                      <Box display="flex" mt={-2}>
                        <Box flexGrow={1} pr={5}>
                          <Typography variant="caption" display="block" color="textSecondary" gutterBottom>
                            Minutes used this billing cycle
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="caption" display="block" gutterBottom>
                            38.9/2000.0
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box mt={2}>
                      <Button variant="outlined">Change</Button>
                      <Button>Cancel Subscription</Button>
                    </Box>
                    <Box mt={5}>
                      <Divider/>
                    </Box>
                    <Box mt={6}>
                      <ListItemText>Payment</ListItemText>
                      <Box>
                        <Typography color="textSecondary" variant="subtitle1">You can use a Credit Card or a bank Account.</Typography>
                      </Box>
                      <Box mt={2} mb={2}>
                        <Typography color="textSecondary" variant="subtitle2" >Payment Method on file</Typography>
                      </Box>
                      <Box mt={-1} mb={2}>
                        <Typography color="textPrimary" variant="body1">Visa Ending in 0218 expiring 4/2020</Typography>
                      </Box>
                    </Box>
                    <Box mt={2}>
                      <Button variant="outlined" href="/card">Edit</Button>
                      <Button>Remove</Button>
                    </Box>
                  </Grid>
                  <Grid item xs>
                      
                  </Grid>

                </Grid>
                </Box>
              </CardContent>
            </Card>
            <PaymentHistory/>
          </Grid>
        </Grid>
      </Container>
  );
}

export default Billings;
