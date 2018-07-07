import React from 'react';
import { Link } from 'react-router-dom';
import { getSymbols } from '../../api';

class Home extends React.Component {
  state = {
    symbols: [],
  };

  componentDidMount() {
    getSymbols().then(symbols => {
      this.setState({ symbols });
    });
  }

  render() {
    const { symbols } = this.state;
    return (
      <div>
        <h2>Home</h2>
        <div>
          <ul>
            {symbols.map(n => (
              <li key={n}>
                <Link to={`detail/${n}`}>{n}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
