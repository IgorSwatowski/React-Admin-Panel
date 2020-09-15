import React from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from '@material-ui/core/TextField';
import {ListItemText} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import CollapseSidebarUserItems from 'components/atoms/CollapseSidebarUserItems.js';


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

function MultilineTextFields() {

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

  
  const handleClick = event => event.preventDefault();

  return (
    <Container maxWidth="lg">
      <Box display="flex" flexWrap="wrap" mt={15} mb={-0.5}>
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
                  Edit Profile
                </Link>
              </Breadcrumbs>
              <Typography variant="body1" color="textSecondary">
                Set up your VoipChurch presence
              </Typography>
            </Box>
          </Box>

          <Box p={1} mx="auto" width="350px">
            <Box mt={3}>
                <LinearProgress variant="determinate" style={{opacity: '0.9'}}/>
                  <Box display="flex" flexDirection="row" mx="auto">
                    <Box order={2} ml={7}>
                      <ListItemText primary="38.9/2000.0"/>
                    </Box>
                    <Box order={1}>
                      <ListItemText secondary="Minutes used this billing cycle"/>
                    </Box>
                  </Box>
              </Box>
            </Box>
        </Box>

        <Grid container direction="row" justify="center" spacing={0}>
        <Grid item xs={12} sm={2}>
          <CollapseSidebarUserItems/>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper>
            <Box p={7}>
              <Grid item xs={12} sm={12}>
                <Box mt={5} display="flex" justifyContent="center" alignItems="center">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="First Name"
                      multiline
                      value={valueFirstName}
                      rowsMax={14}
                      onChange={handleChangeInputFirstName}
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={5} display="flex" justifyContent="center" alignItems="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Last Name"
                    multiline
                    value={valueLastName}
                    rowsMax={4}
                    onChange={handleChangeInputLastName}
                    variant="outlined"
                    fullWidth
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={5} display='flex' justifyContent='center' alignItems='center'>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    value={valueEmail}
                    multiline
                    onChange={handleChangeInputEmail}
                    rowsMax={4}
                    variant="outlined"
                    fullWidth
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={5} display='flex' justifyContent='center' alignItems='center'>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Mobile phone"
                    value={valueMobile}
                    multiline
                    rowsMax={4}
                    onChange={handleChangeInputMobile}
                    variant="outlined"
                    fullWidth
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={5} display='flex' justifyContent='center' alignItems='center'>
                  <TextField
                      id="outlined-select-country"
                      select
                      label="Country"
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
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={5} display='flex' justifyContent='center' alignItems='center' >
                <Button variant="contained" style={{background: '#2196F3', color: "#fff"}}>
                  Save profile
                </Button>
                </Box>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>

    </Container>
  );
}

export default MultilineTextFields;