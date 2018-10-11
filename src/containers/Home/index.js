import React, { Component } from 'react';
import { delayTask } from 'tote-box';
import { Loading, Modal } from 'react-tote-box';
import * as api from 'api'; 
import style from './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: {},
      error: null,
      errorModalVisible: false
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const clearLoadingTask = delayTask(() => this.setState({ loading: true }));

    this.setState({ error: null });

    api.fetchUser()
      .then(data => this.setState({ data }))
      .catch(error => this.setState({ error, errorModalVisible: true }))
      .then(() => {
        if (!clearLoadingTask()) {
          this.setState({ loading: false });
        }
      });
  }
  
  render() {
    const { data, loading, error, errorModalVisible } = this.state;

    return (
      <div className={style.container}>
        <header className={style.header}>
          <h1>Profile</h1>
          <a className={style['refresh-button']} onClick={() => this.fetch()}>Refresh</a>
        </header>
        <section className={style.content}>
          <dl>
            {Object.keys(data).map((field, i) => (
              <React.Fragment key={i}>
                <dt>{field}</dt>
                <dd>{data[field]}</dd>
              </React.Fragment>
            ))}
          </dl>
        </section>
        <Loading visible={loading} />
        <Modal
          title="Error"
          animation="zoom"
          onClose={() => this.setState({ errorModalVisible: false })}
          visible={errorModalVisible}
        >
          <p className={style.error}>
            {error && error.message}
          </p>
        </Modal>
      </div>
    );
  }
}

export default Home;
