# React Errors

> Show errors on the top-right

## Demo

http://xcatliu.com/react-errors/

## Usage

**Warning: This component will render exactly what messages in `errors`, so you should change `errors` whenever `onErrorClose` triggered.**

[examples/simple-example/App.js](https://github.com/xcatliu/react-errors/blob/master/examples/simple-example/App.js)

```js
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
    const newError = new Error('new Error' + Date());
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
```

### Props

Props | Description | Required | Default
----- | ----------- | -------- | -------
`errors` | array of error, each error should be a instance of `Error` or an object which contains `message` | Y |
`onErrorClose` | trigger when the close button is clicked, with a param which is the index of errors | Y |

## Contributing

### Build

```shell
npm run build
```

### Deploy

```shell
npm version <patch|minor|major>
git push
git push --tags
npm publish
```

### Build Examples

```shell
npm run build:examples
```

### Deploy Examples

```shell
npm run deploy:gh-pages
```
