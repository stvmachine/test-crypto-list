import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { tickerPropType } from '../../../custom_propTypes';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

const TableInfo = ({ classes, data }) => (
  data && (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {['BID', 'MID', 'ASK', 'Last price', 'Low', 'High', 'Volume'].map(title => (
              <TableCell numeric key={title}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={data.pair}>
            <TableCell numeric>
              {data.mid}
            </TableCell>
            <TableCell numeric>
              {data.bid}
            </TableCell>
            <TableCell numeric>
              {data.ask}
            </TableCell>
            <TableCell numeric>
              {data.last_price}
            </TableCell>
            <TableCell numeric>
              {data.low}
            </TableCell>
            <TableCell numeric>
              {data.high}
            </TableCell>
            <TableCell numeric>
              {data.volume}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
);

TableInfo.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
  data: tickerPropType.isRequired,
};

export default withStyles(styles)(TableInfo);
