import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as Icon from 'react-cryptocoins';

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

function capitalizeFirstChar(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

class TabContent extends React.Component {
  renderIcon = (id) => {
    const idIcon = capitalizeFirstChar(id);
    const IconCoin = Icon[idIcon];
    return IconCoin ? <IconCoin /> : <div />;
  };

  render() {
    const { classes, data } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
Coin
              </TableCell>
              {['BID', 'MID', 'ASK', 'Last price', 'Low', 'High', 'Volume'].map(title => (
                <TableCell numeric key={title}>
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => (
              <TableRow key={n.pair}>
                <TableCell component="th" scope="row">
                  {this.renderIcon(n.icon)}
                  <Link to={`detail/${n.pair}`}>
                    {n.pair}
                  </Link>
                </TableCell>
                <TableCell numeric>
                  {n.mid}
                </TableCell>
                <TableCell numeric>
                  {n.bid}
                </TableCell>
                <TableCell numeric>
                  {n.ask}
                </TableCell>
                <TableCell numeric>
                  {n.last_price}
                </TableCell>
                <TableCell numeric>
                  {n.low}
                </TableCell>
                <TableCell numeric>
                  {n.high}
                </TableCell>
                <TableCell numeric>
                  {n.volume}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TabContent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
  data: PropTypes.arrayOf(tickerPropType).isRequired,
};

export default withStyles(styles)(TabContent);
