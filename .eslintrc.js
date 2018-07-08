module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  globals: {
    document: 1,
    window: true,
  },
  env: {
    jest: true,
  },
};
