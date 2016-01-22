import React, { Component } from 'react';
import Errors from 'react-errors';

const styles = {
  container: {
    textAlign: 'center',
  },
  button: {
    marginTop: 100,
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      errors: [
        { message: 'A object contains message' },
        new Error('An Error Instance'),
        { message: '出错啦' },
        new Error('一个中文的错误示例，网络请求失败，请重试，滴滴滴'),
      ],
    };
    this.handleErrorClose = this.handleErrorClose.bind(this);
    this.handleAddAnError = this.handleAddAnError.bind(this);
  }
  handleErrorClose(index) {
    const newErrors = this.state.errors.slice();
    newErrors.splice(index, 1);
    this.setState({ errors: newErrors });
  }
  handleAddAnError() {
    const newError = new Error('new Error: ' + Date());
    const newErrors = this.state.errors.slice();
    newErrors.push(newError);
    this.setState({ errors: newErrors });
  }
  render() {
    return (
      <div style={styles.container}>
        <button
          onClick={this.handleAddAnError}
          style={styles.button}
        >
          Add an error
        </button>
        <Errors
          errors={this.state.errors}
          onErrorClose={this.handleErrorClose}
        />
      </div>
    );
  }
}

export default App;
