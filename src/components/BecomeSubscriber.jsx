import React, { Component } from "react";

class BecomeSubscriber extends Component {
  state = {
    toggleForm: false,
  };
  render() {
    return (
      <div>
        {this.state.toggleForm ? (
          <form data-cy="payment-form">
            <div>GIVE ME ALL YOUR MONEY!</div>
          </form>
        ) : (
          <button
            data-cy="become-subscriber"
            onClick={() => this.setState({ toggleForm: true })}
          >
            Become Subscriber
          </button>
        )}
      </div>
    );
  }
}
export default BecomeSubscriber;
