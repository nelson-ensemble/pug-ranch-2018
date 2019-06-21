import React from "react";
import PropTypes from "prop-types";

export default class TabItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <h3 class="test-tabItem">{this.props.text}</h3>;
  }
}

TabItem.propTypes = {
    text: PropTypes.string.isRequired,
};
