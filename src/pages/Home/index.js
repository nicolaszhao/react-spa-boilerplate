import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../api';
import style from './index.module.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: null,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    this.setState({ loading: true });

    try {
      const data = await api.fetchUser();
      this.setState({ data, error: null });
    } catch (error) {
      this.setState({ error });
    }

    this.setState({ loading: false });
  }

  render() {
    const { loading, data, error } = this.state;

    return (
      <div className={style.container}>
        <h1>Home</h1>
        <section className={style.content}>
          {loading && <span className={style.loading}>Loading...</span>}
          {data && (
            <dl className={style.profile}>
              {Object.keys(data).map((field, i) => (
                <React.Fragment key={`${i + 1}`}>
                  <dt>{field}</dt>
                  <dd>{data[field]}</dd>
                </React.Fragment>
              ))}
            </dl>
          )}
          {error && (
            <p className={style.error}>
              {error.message}
            </p>
          )}
        </section>
        <footer>
          <ul>
            <li>
              <button
                type="button"
                className={style.button}
                onClick={() => this.fetchUser()}
              >
                Refresh
              </button>
            </li>
            <li>
              <Link className={style.link} to="/about">to About</Link>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Home;
