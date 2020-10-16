import React from "react";
import {
  Avatar,
  Breadcrumbs,
  Button,
  Box,
  Container,
  Divider,
  MenuItem,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Select,
  TextField,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core';

//Icons ==============================
import {
  CreditCard as CreditCardIcon,
} from '@material-ui/icons';

//Components ==============================
import CollapseSidebarUserItems from 'pages/profiledit/components/CollapseSidebarUserItems';

function CardBilling() {

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
                  <Typography variant="h6" color="textPrimary">
                    Card
                  </Typography>
              </Breadcrumbs>
              <Typography variant="body1" color="textSecondary">
                  Add a card to your account
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
                    <Box pb={3}>
                      <Typography variant="body1" color="textPrimary">Credit Card</Typography>
                      <Typography variant="body2" color="textSecondary">Choose how you want to pay, you have a choice of Credit / Debit Card or Bank account</Typography>
                    </Box>

                    <Box pb={3}>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Account Holder"
                        multiline
                        value={allState.accountHolder}
                        rowsMax={4}
                        onChange={handleAccountHolder}
                        variant="outlined"
                        fullWidth
                      />
                    </Box>

                    <Box pb={3}>
                      <FormControl variant="outlined" fullWidth	>
                        <InputLabel>Credit Card</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-month"
                            value={credit}
                            onChange={handleChangeCredit}
                            startAdornment={<CreditCardIcon style={{marginRight: '20px'}}></CreditCardIcon>}
                            labelWidth={90}
                          />
                      </FormControl>
                    </Box>
  
                  <Box pb={6} display="flex" fullWidth>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={3} fullWidth>
                        <Box display="flex" flexDirection="row">
                          <FormControl variant="outlined" fullWidth>
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
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Box display="flex" flexDirection="row">
                          <FormControl variant="outlined" fullWidth>
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
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <Box display="flex" flexDirection="row">
                            <FormControl variant="outlined" fullWidth>
                              <TextField
                                id="outlined-textarea"
                                label="CVV"
                                placeholder="CVV"
                                multiline
                                variant="outlined"
                              />
                            </FormControl>
                          </Box>
                      </Grid>
                    </Grid>
                  </Box>

                    <Box pb={3}>
                      <Divider/>
                    </Box>

                    <Box pb={3}>
                      <Typography variant="body1" color="textPrimary">Address</Typography>
                      <Typography variant="subtitle2" color="textSecondary">Use a permament address where you can receive confirmation</Typography>
                    </Box>

                    <Box pb={3}>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Street Address"
                        multiline
                        rowsMax={4}
                        variant="outlined"
                        fullWidth
                      />
                    </Box>
                      
                    <Box pb={3}>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="City"
                        multiline
                        rowsMax={4}
                        variant="outlined"
                        fullWidth
                      />
                    </Box>

                    <Box pb={3}>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="State"
                        multiline
                        rowsMax={4}
                        variant="outlined"
                        fullWidth
                      />
                    </Box>

                    <Box display="flex" flexWrap="wrap">
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <Box display="flex" flexDirection="row" flexWrap="wrap">
                            <TextField
                              id="outlined-multiline-flexible"
                              label="ZIP Code"
                              multiline
                              rowsMax={4}
                              variant="outlined"
                              fullWidth
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Box display="flex" flexDirection="row" flexWrap="wrap">
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
                      </Grid>
                    </Box>

                    <Box mt={5}>
                      <Button variant="contained" size="large" color="primary">
                        Save
                      </Button>
                    </Box> 
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

export default CardBilling;
