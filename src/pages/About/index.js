import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import './index.scss';

function About() {
  return (
    <div className="container">
      <h1>About</h1>
      <section>
        <p>This is a react single page application boilerplate.</p>
        <Link className="button" to="/">Back to Home</Link>
      </section>
    </div>
  );
}

export default hot(About);
