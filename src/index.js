/* eslint react/jsx-no-bind:0 */

import React, { Component, PropTypes } from 'react';

const styles = {
  errorsContainer: {
    textAlign: 'left',
    fontSize: '14px',
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 999999999,
    fontFamily: '微软雅黑, "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  errorContainer: {
    margin: 15,
    padding: 15,
    width: 200,
    // http://v4-alpha.getbootstrap.com/components/utilities/#contextual-colors-and-backgrounds
    backgroundColor: '#d9534f',
    color: 'white',
    borderRadius: 4,
    // Like bootstrap .popover class
    // http://getbootstrap.com/javascript/#live-demo-1
    boxShadow: '0 5px 10px rgba(0, 0, 0, .2)',
  },
  errorP: {
    marginTop: 0,
    marginBottom: 0,
    wordBreak: 'break-word',
  },
  errorClose: {
    float: 'right',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: 1,
    cursor: 'pointer',
    marginTop: -3,
  },
};

/**
 * Errors Component
 *
 * Warning: This component will render exactly what messages in `errors`,
 * so you should change `errors` when `onErrorClose` is triggered.
 *
 * @props   errors        array of error, each error should be a instance of
 *                        `Error` or an object which contains `message`
 * @props   onErrorClose  fire when close button clicked, with a param which is
 *                        the index of errors
 */
class Errors extends Component {
  render() {
    return (
      <div style={styles.errorsContainer}>
        {this.props.errors.map((error, index) => (
          <div style={styles.errorContainer} key={index + error.message}>
            <span
              style={styles.errorClose}
              onClick={this.props.onErrorClose.bind(null, index)}
            >
              &#215;
            </span>
            <p style={styles.errorP}>
              {error.message}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

Errors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string.isRequired,
  })).isRequired,
  onErrorClose: PropTypes.func.isRequired,
};

export default Errors;
