import React, { Component } from 'react';
import * as api from '../../api';
import style from './index.module.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: {},
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
        <h2>Home</h2>
        <section className={style.profile}>
          <h3>User Profile</h3>
          {loading && <span className="loading">Loading...</span>}
          <dl>
            {Object.keys(data).map((field) => (
              <React.Fragment key={field}>
                <dt>
                  {field}
                  :
                </dt>
                <dd>{data[field]}</dd>
              </React.Fragment>
            ))}
          </dl>
          {error && (
            <p className={style.error}>
              <strong>Error:</strong>
              {error.message}
            </p>
          )}
          <footer className={style['profile-footer']}>
            <button
              type="button"
              className="button"
              onClick={() => this.fetchUser()}
            >
              Refresh
            </button>
          </footer>
        </section>
      </div>
    );
  }
}

export default Home;
