import React, { Component } from "react";
import "./../assets/css/style.css";

export default class Button extends Component {
  render() {
    return <button className="button" onClick={this.props.action}>{this.props.title}</button>;
  }
}
