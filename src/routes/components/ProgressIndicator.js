import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  loading: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10%',
  },
};

const ProgressIndicator = () => (
  <div style={styles.loading}>
    <CircularProgress size={50} />
  </div>
);

export default ProgressIndicator;
