import * as React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.SFC<{}> = () => (
  <div>
    <h2>Landing Page</h2>
    <Link to="/login">Login</Link>
  </div>
);

export { Landing };
