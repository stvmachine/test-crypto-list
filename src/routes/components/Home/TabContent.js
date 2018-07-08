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

import { tickerPropType } from '../../../custom_propTypes';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  icon: {
    fontSize: '20px',
    marginLeft: '10px',
  },
  rowIcon: {
    display: 'flex',
    alignItems: 'center',
  },
};

class TabContent extends React.Component {
  renderIcon = (id) => {
    const { classes } = this.props;
    return <span className={`cc ${id.toUpperCase()} ${classes.icon}`} />;
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
                  <div className={classes.rowIcon}>
                    <Link to={`detail/${n.pair}`}>
                      {n.pair}
                    </Link>
                    {this.renderIcon(n.icon)}
                  </div>
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
