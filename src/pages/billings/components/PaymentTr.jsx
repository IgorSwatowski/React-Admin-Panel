import React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  IconButton,
  Typography,
  Chip,
} from '@material-ui/core';

//Colors =========================
import { green } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';

//Icons ===========================
import {
  Done as DoneIcon,
  Close as CloseIcon,
  Receipt as ReceiptIcon,
} from '@material-ui/icons';

function PaymentTr() {
  function createData( status, date, amount, offer, PaymentMethod, receipt) {
    return {status, date, amount, offer, PaymentMethod, receipt};
  }

  const rowss = [
    createData(<DoneIcon fontSize="inherit" style={{ color: green[500] }} />,
    <Typography variant="body2" color="textSecondary">Thu, 12 July, 2018</Typography>, '$204.96', 
    <Chip size="small" label="PRO" style={{ background: blue[100], color: blue[500] }}/>, 
    <Typography variant="body2" color="textSecondary">Visa 4**** **** **** 9221</Typography>, 
    <IconButton aria-label="delete" size="small"><ReceiptIcon fontSize="inherit"/></IconButton>),

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
    <IconButton aria-label="delete" size="small"><ReceiptIcon fontSize="inherit" /></IconButton>),
  ];

  return (
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
  );
}

export default PaymentTr;