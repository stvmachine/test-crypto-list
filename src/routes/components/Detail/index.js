import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailContent from './DetailContent';

const Detail = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/:id`} component={DetailContent} />
    <Redirect to="/" />
  </Switch>
);

Detail.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};

export default Detail;
