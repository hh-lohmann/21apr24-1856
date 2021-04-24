import React from "react";
import Footer from "./Footer.jsx";
import "./style.css";

export default function App() {
  return <Example vendorName="Stack Blutz" hosenlu="fo" />;
}

const Example = props => (
  <div>
    <h1>Hello {props.vendorName}!</h1>
    <p>
      I've <em>already</em> started editing to see some magic happen :)
    </p>
    <Question {...props} />
    <Question2 muns="kuns" {...props} />
    <Question3 muns="kuns" {...props} />
    <Footer />
  </div>
)

const Question = props => (
  <div>
    <p>Is your name, eh, really {props.vendorName}?</p>
  </div>
)

const Question2 = () => {
  const props = {
    vendorName: "hu"
  };
  console.log(props);
  return (
    <div>
      Schmorgo: {props.vendorName}
      {props.children}
    </div>
  );
}

class Question3 extends React.Component {
  render() {
    return <p>Glo: {this.props.vendorName}</p>
  }
}
