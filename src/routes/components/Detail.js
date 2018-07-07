import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTicker } from '../../api';

class DetailContent extends React.Component {
  constructor(props) {
    super(props);

    const {
      match: {
        params: { id },
      },
    } = this.props;

    this.state = {
      ticker: {},
      idTicker: id,
    };
  }

  componentDidMount() {
    const { idTicker } = this.state;
    getTicker(idTicker).then((ticker) => {
      this.setState({ ticker });
    });
  }

  render() {
    const { idTicker, ticker } = this.state;
    return (
      <div>
        <h2>
          {idTicker}
        </h2>
        <div>
          {ticker.bid}
        </div>
      </div>
    );
  }
}

const Detail = ({ match }) => (
  <div>
    <Switch>
      <Route path={`${match.url}/:id`} component={DetailContent} />
      <Redirect to="/" />
    </Switch>
  </div>
);

Detail.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

DetailContent.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Detail;
