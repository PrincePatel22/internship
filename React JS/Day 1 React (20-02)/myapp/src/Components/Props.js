import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
const element = <Welcome name="Sachin" />;
root.render(element);
*/

function Props() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edison" />
    </div>
  );
}

export default Props;
