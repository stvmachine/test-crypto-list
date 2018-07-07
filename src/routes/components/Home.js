import React from 'react';
import { Link } from 'react-router-dom';

const coins = ['ethereum', 'bitcoin'];
const Home = () => (
  <div>
    <h2>
Home
    </h2>
    <div>
      <ul>
        {coins.map(n => (
          <li key={n}>
            <Link to={`detail/${n}`}>
              {n}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Home;
