import React from "react";
import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  IconButton,
  Typography,
  TablePagination,
  Container,
} from '@material-ui/core';

//Icons ================================
import {
  GetApp as GetAppIcon,
} from '@material-ui/icons'
 
//Components ================================
import PaymentTr from './PaymentTr';

//Styles ================================
import {useStyles} from '../../../styledComponents/stylesGrid.js';

function PaymentHistory() {
  const classes = useStyles();
  const [rows] = React.useState('10');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  return (
    <Container maxWidth="lg" className={classes.containerPayment}>
        <Card variant="outlined" className={classes.contentPayment}>
           <CardContent className={classes.contentInnerPayment}>
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
                  <IconButton>
                    <GetAppIcon/>
                  </IconButton>
                </Box>
              </Box>
            </CardContent>
                  <TableContainer>
                    <Table size="small" aria-label="a dense table" className={classes.table}> 
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
                      <PaymentTr/>
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
    </Container>
  );
}
export default PaymentHistory;