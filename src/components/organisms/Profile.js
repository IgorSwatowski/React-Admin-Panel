import React from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
                  Edit Profile
                </Typography>
              </Breadcrumbs>
              <Typography variant="body1" color="textSecondary">
                Set up your VoipChurch presence
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" css={{ height: 100 }}>
            <Box>
                <Box pb={1}>
                  <LinearProgress variant="determinate"/>
                </Box>
                <Box display="flex">
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
            </Box>
      </Box>

        <Grid container direction="row" justify="center" spacing={0}>
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
                    <Grid item xs={6}>
                      <Box pb={3}>
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
                      <Box pb={3}>
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
                      <Box pb={3}>
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
                      <Box pb={3}>
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
                      <Box pb={3}>
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
                      <Box pb={3}>
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
                      <Button variant="contained" size="large" color="primary">
                        Save
                      </Button>
                    </Grid>
                    <Grid item xs>
                      
                    </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Container>
  );
}

export default MultilineTextFields;