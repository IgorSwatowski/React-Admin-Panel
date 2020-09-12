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
      <Box style={{ width: '100%' }}>
        <Box display="flex" p={1}>
          <Box p={1} order={1} mr={-34} ml={39} mt={1}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>            
          </Box>

          <Box p={1} order={2} ml={34}>
            <Typography variant="h6">
              John Doe
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Set up your VoipChurch presence
            </Typography>
          </Box>
          
          <Box p={1} order={3} ml={-20}>
            <Breadcrumbs aria-label="breadcrumb"> 
              <Link 
                  onClick={handleClick} 
                  color='textPrimary'
                  to="/billings" 
                  underline='none' 
                  component="button"
                  variant="h6" 
                > 
                / Edit Profile
              </Link>
            </Breadcrumbs> 
          </Box>
          <Box p={1} order={5} width="510px" ml={4}>
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
      </Box>

      <form>
        <Box order={1} display='flex' justifyContent="left" ml={40}>
          <CollapseSidebarUserItems />
        </Box> 
        <Box width="43%" ml={64} p={7} bgcolor="white" order={2} mt={-30}>
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
      </form>
    </Container>
  );
}

export default MultilineTextFields;