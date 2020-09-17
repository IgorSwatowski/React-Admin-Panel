import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import GetAppIcon from '@material-ui/icons/GetApp';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  proVersionMember: {
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3', 
    color: '#0B79D0',
    borderRadius: '55px',
    fontSize: '12px',
    padding: '0px',
    marginLeft: '-10px',
    marginRight: '-10px'
  },
  premiumVersionMember: {
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #4CAF50',
    color: '#4CAF50',
    borderRadius: '55px',
    fontSize: '12px',
    padding: '0px',
    marginLeft: '-10px',
    marginRight: '-10px'
  },
  basicVersionMember: {
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #F44336;',
    color: '#F44336',
    borderRadius: '55px',
    fontSize: '12px',
    padding: '0px',
    marginLeft: '-10px',
    marginRight: '-10px'
  }
}));


function PaymentHistory() {

  const classes = useStyles();

  const [rows] = React.useState('10');

  function createData( status, date, amount, offer, PaymentMethod, receipt) {
    return {status, date, amount, offer, PaymentMethod, receipt};
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const rowss = [
    createData(<DoneIcon style={{ color: '#4CAF50' }}/>,<Typography variant="body2" color="textSecondary">Thu, 12 July, 2018</Typography>, '$204.96', <Button Button className={classes.proVersionMember}>PRO</Button>, <Typography variant="body2" color="textSecondary">Visa 4**** **** **** 9221</Typography>, <IconButton aria-label="delete" size="small">
    <ReceiptIcon /></IconButton>),
    createData(<CloseIcon style={{ color: 'red' }}/>, <Typography variant="body2" color="textSecondary">Sat, 12 July, 2018</Typography>, <Typography variant="body2" color="textSecondary">$408.62</Typography>, <Button Button className={classes.basicVersionMember}>Basic</Button>, <Typography variant="body2" color="textSecondary">Bank Account 3**** 9221 </Typography>,   ),
    createData(<DoneIcon style={{ color: '#4CAF50' }}/>, <Typography variant="body2" color="textSecondary">Thu, 12 July, 2018</Typography>, '$260.04', <Button Button className={classes.premiumVersionMember}>Premium</Button>, <Typography variant="body2" color="textSecondary">Visa 4**** **** **** 9221</Typography>, <IconButton aria-label="delete" size="small">
    <ReceiptIcon /></IconButton> ),
    createData(<DoneIcon style={{ color: '#4CAF50' }}/>, <Typography variant="body2" color="textSecondary">Sat, 12 July, 2018</Typography>, '$699.45', <Button Button className={classes.proVersionMember}>PRO</Button>, <Typography variant="body2" color="textSecondary">Bank Account 3**** 9221</Typography>, <IconButton aria-label="delete" size="small">
    <ReceiptIcon /></IconButton> ),

  ];

  return (
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
            <Box mt={5}>
              <Card variant="outlined">
                <CardContent>
                    <Box display="flex" flexDirection="row">
                        <Box>
                          <Typography variant="body1" color="textPrimary">
                            Payment History
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary">
                            See All Invoices
                          </Typography>
                        </Box>
                        <Grid item xs>
                          
                        </Grid>
                        <Box>
                            <IconButton><GetAppIcon/></IconButton>
                        </Box>
                      </Box>
                
                  <TableContainer>
                    <Table size="small" aria-label="a dense table" padding="none">
                      <TableHead>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Amount</TableCell>
                          <TableCell>Plan</TableCell>
                          <TableCell>Payment Method</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowss.map((rowss) => (
                          <TableRow>
                            <TableCell>{rowss.status}</TableCell>
                            <TableCell>{rowss.date}</TableCell>
                            <TableCell>{rowss.amount}</TableCell>
                            <TableCell>{rowss.offer}</TableCell>
                            <TableCell>{rowss.PaymentMethod}</TableCell>
                            <TableCell>{rowss.receipt}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                      />
                  </TableContainer>
                </CardContent>
              </Card>
              </Box>
          </Grid>
        </Grid>
  );
}

export default PaymentHistory;