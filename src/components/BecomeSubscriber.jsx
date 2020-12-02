import React, { Component } from "react";
import {
  CardCVCElement,
  CardExpiryElement,
  CardNumberElement,
  injectStripe,
} from "react-stripe-elements";

class BecomeSubscriber extends Component {
  state = {
    toggleForm: false,
  };
  render() {
    return (
      <div>
        {this.state.toggleForm ? (
          <form data-cy="payment-form">
            <div data-cy="card-number">
              <label>Card Number</label>
              <CardNumberElement />
            </div>
            <div data-cy="card-expiry">
              <label>Expiry Date</label>
              <CardExpiryElement />
            </div>
            <div data-cy="card-cvc">
              <label>CVC number</label>
              <CardCVCElement />
            </div>
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
export default injectStripe(BecomeSubscriber);
