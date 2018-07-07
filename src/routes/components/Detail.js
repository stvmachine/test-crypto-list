import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const DetailContent = ({ match: { params } }) => {
  const { id } = params;
  return (
    <h2>
      {id}
    </h2>
  );
};

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
