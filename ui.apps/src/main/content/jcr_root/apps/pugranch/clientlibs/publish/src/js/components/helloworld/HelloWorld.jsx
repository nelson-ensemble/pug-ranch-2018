import React from "react";

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.title = props.title;
    this.text = props.text;
  }

  render() {
    return (
      <React.Fragment>
        <p>
          {this.text} {this.name}
        </p>
        <p>{this.title}</p>
      </React.Fragment>
    );
  }
}
