import React from "react";
import {useHistory} from "react-router";
import {
  Breadcrumbs,
  Button,
  Box,
  Container,
  Divider,
  LinearProgress,
  Typography,
  Card,
  CardContent,
  Chip,
  Link,
  Avatar,
} from '@material-ui/core';

import { ProfileNavigation } from "../profiledit/components/ProfileNavigation";
import { UserInfoBox, UsageInfoBox } from '../../styledComponents';
import {useStyles} from '../../styledComponents/stylesGrid.js';
import PaymentHistory from './components/PaymentHistory.jsx';

function Billings(props) {
  const classes = useStyles(props);
  const history = useHistory();
  const routeChange = (path) => {
    history.push(path);
  }
  return (
    <Box>
      <Container maxWidth="lg" className={classes.container}>
        <UserInfoBox className={classes.userInfo}>
          <Avatar alt="Remy Sharp" />
                <Box className={classes.userInfoContent}>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link
                        component="button"
                        variant="body2"
                        color="primary"
                        onClick={() => routeChange('/profile')}>
                          <Typography variant="h6">
                            John Doe
                          </Typography>
                      </Link>
                        <Typography variant="h6" color="textPrimary">
                            Billing
                        </Typography>
                    </Breadcrumbs>

                    <Typography variant="body1">
                      Manage billing information and view receipts
                    </Typography>
                </Box>
            </UserInfoBox>

            { /* Navigation */}
            <ProfileNavigation className={classes.menu} />

            { /* Content */}
            <Card variant="outlined" className={classes.content}>
                <CardContent className={classes.contentInner}>
                    <Box display="flex" flexDirection="row">
                      <Box flexGrow={1} pb={2}>
                        <Typography>
                          Your Plan
                        </Typography>
                      </Box>
                      <Chip size="small" label="PRO" />
                    </Box>
                    { /* Usage Info */}
                    <UsageInfoBox className={classes.usageInfo}>
                        <LinearProgress variant="determinate" value={ 100 } />

                        <Box className={classes.usageInfoContent}>
                            <Typography variant="caption" color="textSecondary">
                                Minutes used this billing cycle
                            </Typography>

                            <Typography variant="caption" gutterBottom>
                                38.9/2000.0
                            </Typography>
                        </Box>
                    </UsageInfoBox>
                    <Box className={classes.flexDirectionRow} mt={2}>
                        <Button variant="outlined" size="large">Change</Button>
                        <Button size="large">Cancel Subscription</Button>
                      </Box>
                      <Box mt={5}>
                        <Divider/>
                      </Box>
                      <Box mt={3}>
                        <Typography>Payment</Typography>
                        <Typography color="textSecondary" variant="body2">You can use a Credit Card or a bank Account.</Typography>
                      </Box>
                      <Box mt={3}>
                        <Typography color="textSecondary" variant="caption">Payment Method on file</Typography>
                        <Typography color="textPrimary" variant="body1">Visa Ending in 0218 expiring 4/2020</Typography>
                      </Box>
                      <Box className={classes.flexDirectionRow} mt={3}>
                        <Button variant="outlined" size="large" onClick={() => routeChange('/card')}>Edit</Button>
                        <Button size="large">Remove</Button>
                      </Box>
                </CardContent>
            </Card>
      </Container>
      <PaymentHistory/>
    </Box>
  );
}

export default Billings;
