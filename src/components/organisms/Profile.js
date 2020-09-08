import React from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from '@material-ui/core/TextField';
import {ListItemText} from "@material-ui/core";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
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
      <div display="flex" justifyContent="center" alignItems="center">
      <ListItem>
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: '204px'}}>
          <ListItemAvatar style={{marginTop: '7px'}}>
            <Avatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="John Doe" secondary="Set up your VoipChurch presence" />
          <Chip size="small" label="PRO" style={{background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3', marginTop: '4px', color: '#2196F3', marginRight: '10px', marginLeft: '-130px'}}/>
          <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '5px'}}>
            <Link
                onClick={handleClick}
                style={{color: 'black', textDecoration: 'none'}}
                to="/profile"
              >
              / Edit Profile
            </Link>
          </Breadcrumbs>
          <div style={{width: '190px', marginTop: '12px', marginLeft: '174px'}}>
            <LinearProgress variant="determinate" style={{background: '#2196F3', opacity: '0.9'}}/>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <ListItemText secondary="Minutes used this billing cycle"/>
                <ListItemText primary="38.9/2000.0" style={{marginRight: '-115px'}}/>
              </div>
          </div>
          <div style={{width: '100px', marginTop: '12px', opacity: '0.6'}}>
              <LinearProgress variant="determinate" style={{background: '#2196F3', opacity: '0.9'}}/>
          </div>
          </div>
      </ListItem>
      </div>
      <div style={{position: 'absolute', marginLeft: '240px'}}>
        <CollapseSidebarUserItems />
      </div>

      <div display="flex" justifyContent="center" alignItems="center">
      <Box width="43%" style={{marginLeft: '440px'}}>
      <Paper variant="outlined" style={{padding: "60px"}}>
      <div>
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
      </div>
      <div style={{marginTop: "30px"}}>
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
      </div>
      <div style={{marginTop: "30px"}}>
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
      </div>
      <div style={{marginTop: "30px"}}>
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
      </div>
      <div style={{marginTop: '30px'}}>
        <TextField
            id="outlined-select-country"
            select
            label="Country"
            value={country}
            onChange={handleChangeCountry}
            variant="outlined"
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
        </TextField>
      </div>
      <div style={{marginTop: "30px"}}>
      <Button variant="contained" style={{background: '#2196F3', color: "#fff"}}>
        Save profile
      </Button>
      </div>
      </Paper>
      </Box>
      </div>
    </form>
    </Container>
  );
}

export default MultilineTextFields;