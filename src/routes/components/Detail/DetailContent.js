import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TableInfo from './TableInfo';
import { getTicker } from '../../../api';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '34px',
    margin: '0 10px',
  },
  iconGoBack: {
    fontSize: '50px',
  },
};

class DetailContent extends React.Component {
  constructor(props) {
    super(props);

    const {
      match: {
        params: { id },
      },
    } = this.props;

    this.state = {
      ticker: null,
      idTicker: id,
    };
  }

  componentWillMount() {
    const { idTicker } = this.state;
    getTicker(idTicker).then((ticker) => {
      this.setState({ ticker });
    });
  }

  renderIcon = (id) => {
    const { classes } = this.props;
    return <span className={`cc ${id.toUpperCase()} ${classes.icon}`} />;
  };

  render() {
    const { idTicker, ticker } = this.state;
    const { classes } = this.props;
    return ticker ? (
      <div className={classes.root}>
        <div className={classes.header}>
          <Button component={Link} to="/" classNames={classes.buttonGoBack}>
            <NavigateBefore className={classes.iconGoBack} />
          </Button>
          <div>
            {this.renderIcon(ticker.icon)}
          </div>
          <h2>
            {idTicker}
          </h2>
        </div>
        <TableInfo data={ticker} />
      </div>
    ) : null;
  }
}

DetailContent.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

export default withStyles(styles)(DetailContent);
