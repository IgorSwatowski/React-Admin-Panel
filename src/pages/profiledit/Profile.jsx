import React from "react";
import {useHistory} from 'react-router';
import {
    TextField,
    Breadcrumbs,
    Button,
    Box,
    Container,
    Card,
    CardContent,
    MenuItem,
    LinearProgress,
    Typography,
    Link,
    Avatar,
} from '@material-ui/core';

import { ProfileNavigation } from './components/ProfileNavigation';
import { UserInfoBox, UsageInfoBox } from '../../styledComponents';
import {useStyles} from '../../styledComponents/stylesGrid.js';


const countries = [
    {
      value: 'United Kingdom',
    },
    {
      value: 'United States',
    },
    {
      value: 'Poland',
    }
  ];

function Profile() {
    const history = useHistory();
    const routeChange = (path) => {
        history.push(path);
    }

    const classes = useStyles();

    const [valueFirstName, setValueFirstName] = React.useState('John');
    const [valueLastName, setValueLastName] = React.useState('Doe');
    const [valueEmail, setValueEmail] = React.useState('john.doe@gmail.com');
    const [valueMobile, setValueMobile] = React.useState('(229) 555-0109');
    const [country, setCountry] = React.useState('United Kingdom');

    const handleChangeInputFirstName = event => setValueFirstName(event.target.value);
    const handleChangeInputLastName = event => setValueLastName(event.target.value);
    const handleChangeInputEmail = event => setValueEmail(event.target.value);
    const handleChangeInputMobile = event => setValueMobile(event.target.value);
    const handleChangeCountry = event => setCountry(event.target.value);


    return (
        <Container maxWidth="lg" className={classes.container}>
            { /* User Info */}
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
                            Edit
                        </Typography>
                    </Breadcrumbs>

                    <Typography variant="body1">
                        Set up your VoipChurch presence
                    </Typography>
                </Box>
            </UserInfoBox>

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

            { /* Navigation */}
            <ProfileNavigation className={classes.menu} />

            { /* Content */}
            <Card variant="outlined" className={classes.content}>
                <CardContent className={classes.contentInner}>
                    <Box>
                        <TextField
                            id="profile-first-name"
                            label="First Name"
                            value={valueFirstName}
                            onChange={handleChangeInputFirstName}
                            variant="outlined"
                            fullWidth
                        />    
                    </Box>
                    <Box pt={5}>
                        <TextField
                            id="profile-last-name"
                            label="Last Name"
                            value={valueLastName}
                            onChange={handleChangeInputLastName}
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                    <Box pt={5}>
                        <TextField
                            id="profile-email"
                            label="Email"
                            type="email"
                            value={valueEmail}
                            onChange={handleChangeInputEmail}
                            variant="outlined"
                            fullWidth
                        />
                    </Box>

                    <Box pt={5}>
                        <TextField
                            id="profile-phone"
                            label="Mobile Phone"
                            type="phone"
                            value={valueMobile}
                            onChange={handleChangeInputMobile}
                            variant="outlined"
                            fullWidth
                        />
                    </Box>

                    <Box pt={5}>
                    <TextField
                        id="profile-country"
                        type="select"
                        select
                        value={country}
                        onChange={handleChangeCountry}
                        variant="outlined"
                        fullWidth
                    >
                        {countries.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.value}
                              </MenuItem>
                            ))}
                    </TextField>
                    </Box>

                    <Box pt={5}>
                        <Button
                            className={classes.fieldRow}
                            variant="contained"
                            size="large"
                            color="primary"
                        >
                            Save Profile
                        </Button>   
                    </Box>               
                </CardContent>
            </Card>
        </Container>
    );
}
export default Profile;