import React from "react"

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  marginTop: "1rem",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const STRIPE_TEST_KEY = "pk_test_5gZ2olOlYcVj30LG99LJk0S700YQ2Iu1I5";
const product_sku = "sku_GYGcOUA60xGkcs"
const success_url = "https://www.vimeo.com"
const cancel_url = "https://testliveticket.netlify.com"

const Checkout = class extends React.Component {

  componentDidMount() {
    this.stripe = window.Stripe(STRIPE_TEST_KEY);
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: product_sku, quantity: 1 }],
      successUrl: success_url,
      cancelUrl: cancel_url,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        BUY MY BOOK
      </button>
    )
  }
}

export default Checkout