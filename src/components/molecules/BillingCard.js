import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListSubheader from "@material-ui/core/ListSubheader";
import {ListItemText} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import CollapseSidebarUserItems from 'components/atoms/CollapseSidebarUserItems.js';

function CardBilling() {

  const handleClick = event => event.preventDefault();

  const [accountHolder, setAccountHolder] = React.useState('John Doe');
  const [credit, setCredit] = React.useState('3445 6464 7885 3321');
  const [month, setMonth] = React.useState('Month');
  const handleAccountHolder = event => setAccountHolder(event.target.value);
  const handleChangeCredit = event => setCredit(event.target.value);
  const handleChangeMonth = event => setMonth(event.target.value);


  const [country, setCountry] = React.useState('United Kingdom');
  const handleChangeCountry = event => setCountry(event.target.value);

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
  

  const allState= {
    accountHolder: accountHolder,
  }

  return (
    <Container 
      maxWidth="lg">
      <Box display="flex" flexWrap="wrap"  mt={15}>
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
      </Box>
        
        <Grid container direction="row" justifyContent="center" spacing={0}>
          <Grid item xs={12} sm={2}>
            <CollapseSidebarUserItems/>
          </Grid>
          <Grid item xs={12} sm={10}>
           <Paper>
            <Box p={7}>
              <Grid item xs={12} sm={12} >
                <Typography variant="body1" color="textPrimary">Credit Card</Typography>
                <Typography variant="body2" color="textSecondary">Choose how you want to pay, you have a choice of Credit / Debit Card or Bank account</Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={3}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Account Holder"
                    multiline
                    value={allState.accountHolder}
                    rowsMax={4}
                    onChange={handleAccountHolder}
                    variant="outlined"
                    />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={3}>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-month">Credit Card</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-month"
                        value={credit}
                        onChange={handleChangeCredit}
                        startAdornment={<CreditCardIcon style={{marginRight: '20px'}}></CreditCardIcon>}
                        />
                    </FormControl>
                  </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={3} display="flex" flexWrap="wrap" mb={5}>
                  <Box display="flex" flexDirection="row" flexWrap="wrap" mr={2}>
                    <FormControl variant="outlined">
                      <InputLabel id="demo-simple-select-outlined-label">Month</InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={month}
                          onChange={handleChangeMonth}
                         >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>January</MenuItem>
                          <MenuItem value={2}>February</MenuItem>
                          <MenuItem value={3}>March</MenuItem>
                        </Select>
                    </FormControl>
                  </Box>

                  <Box mr={2} display="flex" flexDirection="row" flexWrap="wrap">
                    <FormControl variant="outlined">
                      <InputLabel id="demo-simple-select-outlined-label">Month</InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={month}
                          onChange={handleChangeMonth}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>January</MenuItem>
                          <MenuItem value={2}>February</MenuItem>
                          <MenuItem value={3}>March</MenuItem>
                        </Select>
                    </FormControl>
                  </Box>

                  <Box display="flex" flexDirection="row" mr={4}>
                    <FormControl variant="outlined">
                      <TextField
                        id="outlined-textarea"
                        label="CVV"
                        placeholder="CVV"
                        multiline
                        variant="outlined"
                      />
                    </FormControl>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={1}>
                  <Divider/>
                  <ListItemText style={{marginTop: '20px'}}>Address</ListItemText>
                  <ListSubheader style={{marginLeft: '-15px'}}>Use a permament address where you can receive confirmation</ListSubheader>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={3}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Street Address"
                    multiline
                    rowsMax={4}
                    variant="outlined"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={3}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="City"
                    multiline
                    rowsMax={4}
                    variant="outlined"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={3}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="State"
                    multiline
                    rowsMax={4}
                    variant="outlined"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box display="flex" flexWrap="wrap">
                  <Box mt={3} display="flex" flexDirection="row" flexWrap="wrap" mr={4}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="ZIP Code"
                      multiline
                      rowsMax={4}
                      variant="outlined"
                      fullWidth
                    />
                  </Box>

                  <Box mt={3} display="flex" flexDirection="row" flexWrap="wrap">
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
                </Box>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={5}>
                  <Button variant="contained" style={{background: '#2196F3', color: "#fff"}}>
                    Save
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

export default CardBilling;
