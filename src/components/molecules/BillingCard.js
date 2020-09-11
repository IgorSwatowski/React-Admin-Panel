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
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


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
      maxWidth='lg'>
        <div style={{ width: '100%' }}>
        <Box display="flex" p={1}>
          <Box p={1} order={1} mr={-26} ml={27} mt={1}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>            
          </Box>

          <Box p={1} order={2} ml={26}>
            <ListItemText primary="John Doe" secondary="Manage billing information and view receipts" /> 
          </Box>
          
          <Box p={1} order={3} mt={0.7} ml={-22}>
            <Breadcrumbs aria-label="breadcrumb"> 
              <Link 
                  onClick={handleClick} 
                  style={{color: '#2196F3'}}
                  to="/billings" 
                  underline='none' 
                  component="button" 
                > 
                / Billings
              </Link>
              <Link 
                  color="textPrimary"
                  to="/billings" 
                  underline='none' 
                  component="button" 
                >
                   Card
              </Link>
            </Breadcrumbs> 
          </Box>

          <Box p={1} order={4} mt={0.7} ml={-20.5}>
             <Chip size="small" label="PRO" style={{background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3', color: '#2196F3'}}/>
          </Box>
        </Box>
      </div>

      <Box mt={-1} ml={32} position="absolute">
        <CollapseSidebarUserItems />
      </Box>

      <form>
      <div display="flex" justifyContent="center" alignItems="center">
      <Box width="43%" ml={54.5} p={7} bgcolor="white">
          <ListItemText style={{position: 'static'}}>Credit Card</ListItemText>
          <ListSubheader style={{marginLeft: '-15px', width: '80%', position: 'static'}}>Choose how you want to pay, you have a choice of Credit / Debit Card or Bank account</ListSubheader>
            <Box mt={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="Account Holder"
                multiline
                value={allState.accountHolder}
                rowsMax={4}
                onChange={handleAccountHolder}
                variant="outlined"
                style={{width: '400px'}}
              />
            </Box>

            <Box mt={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-month">Credit Card</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-month"
                    value={credit}
                    onChange={handleChangeCredit}
                    startAdornment={<CreditCardIcon style={{marginRight: '20px'}}></CreditCardIcon>}
                    labelWidth={90}
                    style={{width: '400px'}}
                  />
              </FormControl>
            </Box>
        
            <Box mt={3}>
              <FormControl variant="outlined" style={{width: '130px'}}>
                <InputLabel id="demo-simple-select-outlined-label">Month</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={month}
                    onChange={handleChangeMonth}
                    labelWidth={60}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>January</MenuItem>
                    <MenuItem value={2}>February</MenuItem>
                    <MenuItem value={3}>March</MenuItem>
                  </Select>
              </FormControl>

              <FormControl variant="outlined" style={{width: '130px', marginLeft: '20px'}}>
                <InputLabel id="demo-simple-select-outlined-label">Month</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={month}
                    onChange={handleChangeMonth}
                    labelWidth={60}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>January</MenuItem>
                    <MenuItem value={2}>February</MenuItem>
                    <MenuItem value={3}>March</MenuItem>
                  </Select>
              </FormControl>

              <FormControl variant="outlined" style={{width: '130px', marginTop: '20px', marginRight: '260px'}}>
                <TextField
                  id="outlined-textarea"
                  label="CVV"
                  placeholder="CVV"
                  multiline
                  variant="outlined"
                  style={{width: '100px', marginTop: '-75px', marginLeft: '300px'}}
                />
              </FormControl>
            </Box>

        <Box mt={1}>
                    <Divider/>
                    <ListItemText style={{marginTop: '20px'}}>Address</ListItemText>
                    <ListSubheader style={{marginLeft: '-15px'}}>Use a permament address where you can receive confirmation</ListSubheader>
            </Box>
            <Box mt={3}>
                <TextField
                id="outlined-multiline-flexible"
                label="Street Address"
                multiline
                rowsMax={4}
                variant="outlined"
                style={{width: '400px'}}
                />
            </Box>
            <Box mt={3}>
                <TextField
                id="outlined-multiline-flexible"
                label="City"
                multiline
                rowsMax={4}
                variant="outlined"
                style={{width: '400px'}}
                />
            </Box>
            <Box mt={3}>
                <TextField
                id="outlined-multiline-flexible"
                label="State"
                multiline
                rowsMax={4}
                variant="outlined"
                style={{width: '400px'}}
                />
            </Box>
            <Box mt={3}>
                <TextField
                id="outlined-multiline-flexible"
                label="ZIP Code"
                multiline
                rowsMax={4}
                variant="outlined"
                style={{width: '130px'}}
                />

                <TextField
                    id="outlined-select-country"
                    select
                    label="Country"
                    value={country}
                    onChange={handleChangeCountry}
                    variant="outlined"
                    style={{width: '230px', marginLeft: '40px'}}
                    >
                    {countries.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>
            </Box>

            <Box mt={5}>
              <Button variant="contained" style={{background: '#2196F3', color: "#fff"}}>
                Save
              </Button>
            </Box>
      </Box>
      </div>
      </form>
    </Container>
  );
}

export default CardBilling;
