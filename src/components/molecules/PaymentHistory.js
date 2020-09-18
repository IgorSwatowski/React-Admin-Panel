import React from "react";
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
import Chip from '@material-ui/core/Chip';

import { green } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';


function PaymentHistory() {

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
    createData(<DoneIcon fontSize="inherit" style={{ color: green[500] }} />,
    <Typography variant="body2" color="textSecondary">Thu, 12 July, 2018</Typography>, '$204.96', 
    <Chip size="small" label="PRO" style={{ background: blue[100], color: blue[500] }}/>, 
    <Typography variant="body2" color="textSecondary">Visa 4**** **** **** 9221</Typography>, 
    <IconButton aria-label="delete" size="small"><ReceiptIcon fontSize="inherit" /></IconButton>),

    createData(<CloseIcon fontSize="inherit" style={{ color: red[500] }} />,
    <Typography variant="body2" color="textSecondary">Thu, 12 July, 2018</Typography>, '$408.62', 
    <Chip size="small" label="BASIC" style={{ background: red[100], color: red[500]}} />, 
    <Typography variant="body2" color="textSecondary">Bank Account 3**** 9221</Typography>, 
    <IconButton aria-label="delete" size="small"></IconButton>),

    createData(<DoneIcon fontSize="inherit" style={{ color: green[500] }} />,
    <Typography variant="body2" color="textSecondary">Thu, 12 July, 2018</Typography>, '$260.96', 
    <Chip size="small" label="PREMIUM" style={{ background: green[100], color: green[500] }}/>, 
    <Typography variant="body2" color="textSecondary">Visa 4**** **** **** 9221</Typography>, 
    <IconButton aria-label="delete" size="small"><ReceiptIcon fontSize="inherit" /></IconButton>),

    createData(<DoneIcon fontSize="inherit" style={{ color: green[500] }} />,
    <Typography variant="body2" color="textSecondary">Thu, 12 July, 2018</Typography>, '$699.45', 
    <Chip size="small" label="PRO" style={{ background: blue[100], color: blue[500] }}/>, 
    <Typography variant="body2" color="textSecondary">Bank Account 3**** 9221</Typography>, 
    <IconButton aria-label="delete" size="small"><ReceiptIcon fontSize="inherit" /></IconButton>)

  ];

  return (
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
            <Box mt={5}>
              <Card variant="outlined">
                <CardContent>
                  <Box display="flex" flexDirection="row">
                      <Box flexGrow={1}>
                        <Typography variant="body1" color="textPrimary">
                          Payment History
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          See All Invoices
                        </Typography>
                      </Box>
                        <Box>
                            <IconButton><GetAppIcon/></IconButton>
                        </Box>

                      </Box>
                  </CardContent>
                  <TableContainer>
                    <Table size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Amount</TableCell>
                          <TableCell align="left">Plan</TableCell>
                          <TableCell>Payment Method</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowss.map((rowss) => (
                          <TableRow>
                            <TableCell align="left">{rowss.status}</TableCell>
                            <TableCell>{rowss.date}</TableCell>
                            <TableCell>{rowss.amount}</TableCell>
                            <TableCell>{rowss.offer}</TableCell>
                            <TableCell>{rowss.PaymentMethod}</TableCell>
                            <TableCell align="right">{rowss.receipt}</TableCell>
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
              </Card>
              </Box>
          </Grid>
        </Grid>
  );
}

export default PaymentHistory;