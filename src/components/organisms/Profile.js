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
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';

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
    <Container>
      <form>
      <div style={{ width: '100%' }}>
        <Box display="flex" p={1}>
          <Box p={1} order={1} mr={-26} ml={27} mt={1}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>            
          </Box>

          <Box p={1} order={2} ml={26}>
            <ListItemText primary="John Doe" secondary="Set up your VoipChurch presence" /> 
          </Box>
          
          <Box p={1} order={3} mt={0.7} ml={-13}>
            <Breadcrumbs aria-label="breadcrumb"> 
              <Link 
                  onClick={handleClick} 
                  color="textPrimary"
                  to="/profile" 
                  underline='none' 
                  component="button" 
                > 
                / Edit Profile
              </Link> 
            </Breadcrumbs> 
          </Box>

          <Box p={1} order={4} mt={0.5} ml={-17}>
             <Chip size="small" label="PRO" style={{background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3', color: '#2196F3'}}/>
          </Box>

          <Box p={1} order={5} width="510px" ml={17}>
            <Box ml={22} mt={2}>
                <LinearProgress variant="determinate" style={{opacity: '0.9'}}/>
                  <Box display="flex" flexDirection="row">
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
      </div>
      
      <Box mt={-1} ml={32} position="absolute">
        <CollapseSidebarUserItems />
      </Box>

      <div display="flex" justifyContent="center" alignItems="center">
      <Box width="43%" ml={54.5} p={7} bgcolor="white">
      <Box display='flex' justifyContent='center' alignItems='center'>
        <TextField
          id="outlined-multiline-flexible"
          label="First Name"
          multiline
          value={valueFirstName}
          rowsMax={14}
          onChange={handleChangeInputFirstName}
          variant="outlined"
          style={{width: '300px'}}
        />
      </Box>
      <Box mt={5} display='flex' justifyContent='center' alignItems='center'>
        <TextField
          id="outlined-multiline-flexible"
          label="Last Name"
          multiline
          value={valueLastName}
          rowsMax={4}
          onChange={handleChangeInputLastName}
          variant="outlined"
          style={{width: '300px'}}
        />
      </Box>
      <Box mt={5} display='flex' justifyContent='center' alignItems='center'>
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          value={valueEmail}
          multiline
          onChange={handleChangeInputEmail}
          rowsMax={4}
          variant="outlined"
          style={{width: '300px'}}
        />
      </Box>
      <Box mt={5} display='flex' justifyContent='center' alignItems='center'>
        <TextField
          id="outlined-multiline-flexible"
          label="Mobile phone"
          value={valueMobile}
          multiline
          rowsMax={4}
          onChange={handleChangeInputMobile}
          variant="outlined"
          style={{width: '300px'}}
        />
      </Box>
      <Box mt={5} display='flex' justifyContent='center' alignItems='center'>
        <TextField
            id="outlined-select-country"
            select
            label="Country"
            value={country}
            onChange={handleChangeCountry}
            variant="outlined"
            style={{width: '300px'}}
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
        </TextField>
      </Box>
      <Box mt={5} pl={14.4}>
      <Button variant="contained" style={{background: '#2196F3', color: "#fff"}}>
        Save profile
      </Button>
      </Box>
      </Box>
      </div>
    </form>
    </Container>
  );
}

export default MultilineTextFields;